#!/usr/bin/env bash
# Validate DNS-AID records via DNS-over-HTTPS (mimics isitagentready.com scanner).
# Scanner uses Cloudflare DoH with Google fallback — this script does the same.
set -euo pipefail

DOMAIN="${1:-henriqueoliv.pt}"
NAMES=("_index._agents.$DOMAIN" "_a2a._agents.$DOMAIN" "_mcp._agents.$DOMAIN")
TYPE=64  # SVCB (64) — also try 65 (HTTPS) as fallback

doh_query() {
  local name="$1" type="$2" url="$3"
  curl -s --max-time 10 "$url?name=$name&type=$type" -H "accept: application/dns-json"
}

check_one() {
  local name="$1"
  echo "=== $name (SVCB/HTTPS) ==="
  local cf google
  cf=$(doh_query "$name" "$TYPE" "https://cloudflare-dns.com/dns-query")
  echo "Cloudflare DoH:"
  echo "$cf" | jq '{Status, AD, Answer, Authority}' 2>/dev/null || echo "$cf"

  local status
  status=$(echo "$cf" | jq -r '.Status // 2')
  local has_answer
  has_answer=$(echo "$cf" | jq -e '.Answer != null and (.Answer|length>0)' >/dev/null && echo yes || echo no)

  if [[ "$status" != "0" || "$has_answer" != "yes" ]]; then
    echo "  → no SVCB Answer via Cloudflare (Status=$status), trying Google fallback..."
    google=$(doh_query "$name" "$TYPE" "https://dns.google/resolve")
    echo "Google DoH:"
    echo "$google" | jq '{Status, AD, Answer, Authority}' 2>/dev/null || echo "$google"
    has_answer=$(echo "$google" | jq -e '.Answer != null and (.Answer|length>0)' >/dev/null && echo yes || echo no)
    if [[ "$has_answer" == "yes" ]]; then
      echo "  ✓ PASS via Google fallback"
    else
      echo "  ✗ FAIL — no SVCB/HTTPS record found (publish via dns/publish-cloudflare.sh)"
      # also try HTTPS type 65
      echo "  → trying HTTPS (65) as alternative..."
      cf=$(doh_query "$name" "65" "https://cloudflare-dns.com/dns-query")
      echo "$cf" | jq '{Status, AD, Answer}' 2>/dev/null || echo "$cf"
    fi
  else
    echo "  ✓ PASS via Cloudflare"
    # check AD (DNSSEC validated)
    local ad
    ad=$(echo "$cf" | jq -r '.AD // false')
    if [[ "$ad" == "true" ]]; then echo "  ✓ DNSSEC AD=1 (authenticated)"; else echo "  ! AD=0 — DNSSEC validation not signaled (ensure DNSSEC enabled)"; fi
    # check alpn/port/key presence in RDATA
    local rdata
    rdata=$(echo "$cf" | jq -r '.Answer[0].data // empty')
    if echo "$rdata" | grep -qi 'alpn'; then echo "  ✓ alpn present"; else echo "  ! alpn missing"; fi
    if echo "$rdata" | grep -qi 'port'; then echo "  ✓ port present"; else echo "  ! port missing"; fi
    if echo "$rdata" | grep -q 'key65'; then echo "  ✓ keyNNNNN present (experimental params)"; fi
  fi
  echo ""
}

echo "DNS-AID DoH validation for $DOMAIN"
echo "Resolver: Cloudflare https://cloudflare-dns.com/dns-query → fallback https://dns.google/resolve"
echo ""

# also show DNSSEC
echo "--- DNSSEC ---"
dig +short DNSKEY "$DOMAIN" | head -n 5 || true
echo ""

for n in "${NAMES[@]}"; do
  check_one "$n"
done

echo "Full scan (isitagentready.com):"
echo "  curl -s -X POST https://isitagentready.com/api/scan -H 'Content-Type: application/json' -d '{\"url\":\"https://www.$DOMAIN\"}' | jq .checks.discoverability.dnsAid"
