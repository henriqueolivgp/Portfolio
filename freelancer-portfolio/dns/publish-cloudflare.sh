#!/usr/bin/env bash
# Publish DNS-AID SVCB records to Cloudflare via API.
# Requires: CF_API_TOKEN (Zone:Edit) and optionally CF_ZONE_ID.
# Idempotent — creates or updates each _agents leaf.
# Follows RFC 9460 ServiceMode + numeric keyNNNNN for experimental DNS-AID params.
set -euo pipefail

DOMAIN="henriqueoliv.pt"
ZONE_ID="${CF_ZONE_ID:-}"
API_TOKEN="${CF_API_TOKEN:-}"

if [[ -z "$API_TOKEN" ]]; then
  echo "error: CF_API_TOKEN not set (needs Zone:Edit for $DOMAIN)" >&2
  echo "  export CF_API_TOKEN='your-token'" >&2
  exit 1
fi

if [[ -z "$ZONE_ID" ]]; then
  echo "Resolving zone ID for $DOMAIN..."
  ZONE_ID=$(curl -s -H "Authorization: Bearer $API_TOKEN" \
    "https://api.cloudflare.com/client/v4/zones?name=$DOMAIN" | jq -r '.result[0].id // empty')
  if [[ -z "$ZONE_ID" || "$ZONE_ID" == "null" ]]; then
    echo "error: could not resolve zone ID for $DOMAIN" >&2
    exit 1
  fi
  echo "Zone ID: $ZONE_ID"
fi

api() { curl -s -H "Authorization: Bearer $API_TOKEN" -H "Content-Type: application/json" "$@"; }

# upsert <name> <type> <content>
upsert() {
  local name="$1" type="$2" content="$3"
  local fqdn="${name}.${DOMAIN}"
  # search existing
  local existing
  existing=$(api "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records?type=$type&name=$fqdn" | jq -r '.result[0].id // empty')
  local payload
  payload=$(jq -n --arg type "$type" --arg name "$fqdn" --arg content "$content" --argjson ttl 3600 \
    '{type:$type, name:$name, content:$content, ttl:$ttl, proxied:false, comment:"DNS-AID"}')

  if [[ -n "$existing" && "$existing" != "null" ]]; then
    echo "→ Update $type $fqdn ($existing)"
    api -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$existing" -d "$payload" | jq '{success, errors, result:{id:.result.id, name:.result.name, type:.result.type, content:.result.content}}'
  else
    echo "→ Create $type $fqdn"
    local resp
    resp=$(api -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" -d "$payload")
    # Cloudflare may reject SVCB on some plans — fallback to HTTPS (type 65)
    if echo "$resp" | jq -e '.success == false' >/dev/null; then
      if [[ "$type" == "SVCB" ]]; then
        echo "  SVCB rejected, retrying as HTTPS..."
        upsert "$name" "HTTPS" "$content"
        return
      fi
      echo "$resp" | jq .
      return 1
    fi
    echo "$resp" | jq '{success, result:{id:.result.id, name:.result.name, type:.result.type, content:.result.content}}'
  fi
}

# Cloudflare expects content as: '1 target. alpn="mcp" port=443 ...'
# Use private-use key65280.. for experimental DNS-AID params until IANA registration.

echo "Publishing DNS-AID records for $DOMAIN (DNSSEC already enabled on Cloudflare)..."
echo ""

upsert "_index._agents" "SVCB" '1 www.henriqueoliv.pt. alpn="mcp" port=443 ipv4hint=104.21.9.250,172.67.189.216 ipv6hint=2606:4700:3035::ac43:bdd8,2606:4700:3037::6815:9fa mandatory=alpn,port key65280="endpoint=https://www.henriqueoliv.pt/mcp" key65281="well-known=/.well-known/mcp/server-card.json" key65282="cap=https://www.henriqueoliv.pt/.well-known/ai-catalog.json"'

upsert "_a2a._agents" "SVCB" '1 www.henriqueoliv.pt. alpn="a2a" port=443 ipv4hint=104.21.9.250,172.67.189.216 ipv6hint=2606:4700:3035::ac43:bdd8,2606:4700:3037::6815:9fa mandatory=alpn,port key65280="endpoint=https://www.henriqueoliv.pt/mcp" key65281="well-known=/.well-known/mcp/server-card.json"'

upsert "_mcp._agents" "SVCB" '1 www.henriqueoliv.pt. alpn="mcp" port=443 ipv4hint=104.21.9.250,172.67.189.216 ipv6hint=2606:4700:3035::ac43:bdd8,2606:4700:3037::6815:9fa mandatory=alpn,port key65280="endpoint=https://www.henriqueoliv.pt/mcp" key65281="well-known=/.well-known/mcp/server-card.json" key65282="cap=https://www.henriqueoliv.pt/.well-known/ai-catalog.json" key65283="bap=mcp=1.0"'

# Optional flat primary owner (§3.1 known-agent)
upsert "portfolio" "SVCB" '1 www.henriqueoliv.pt. alpn="mcp" port=443 key65280="endpoint=https://www.henriqueoliv.pt/mcp" key65281="well-known=/.well-known/mcp/server-card.json"'

# AliasMode walkable (priority 0)
upsert "portfolio._agents" "SVCB" '0 portfolio.henriqueoliv.pt.'

echo ""
echo "Done. Verify with:"
echo "  dig _index._agents.$DOMAIN SVCB +dnssec +multi"
echo "  curl -s 'https://cloudflare-dns.com/dns-query?name=_index._agents.$DOMAIN&type=64' -H 'accept: application/dns-json' | jq"
echo "  ./dns/validate-doh.sh"
