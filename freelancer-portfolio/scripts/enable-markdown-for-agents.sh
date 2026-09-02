#!/usr/bin/env bash
# Enable Cloudflare Markdown for Agents (content conversion) for henriqueoliv.pt
# Docs: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
# - Pro/Business/Enterprise: PATCH /zones/{id}/settings/content_converter {"value":"on"}
# - Free (and fallback via Configuration Rule): PUT /zones/{id}/rulesets/phases/http_config_settings/entrypoint
# Requires CF_API_TOKEN with Zone Settings:Edit + Dynamic Configuration:Edit
set -euo pipefail

DOMAIN="${DOMAIN:-henriqueoliv.pt}"
CF_API_TOKEN="${CF_API_TOKEN:-}"
CF_ZONE_ID="${CF_ZONE_ID:-}"

if [[ -z "$CF_API_TOKEN" ]]; then
  echo "error: CF_API_TOKEN not set" >&2
  echo "  export CF_API_TOKEN='...' (Zone Settings:Edit + Config Rules:Edit)" >&2
  exit 1
fi

if [[ -z "$CF_ZONE_ID" ]]; then
  echo "Resolving zone ID for $DOMAIN..."
  CF_ZONE_ID=$(curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
    "https://api.cloudflare.com/client/v4/zones?name=$DOMAIN" | jq -r '.result[0].id // empty')
  [[ -n "$CF_ZONE_ID" && "$CF_ZONE_ID" != "null" ]] || { echo "could not resolve zone id" >&2; exit 1; }
  echo "Zone ID: $CF_ZONE_ID"
fi

echo "1) Trying zone setting content_converter=on (Pro/Business)..."
RESP=$(curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/settings/content_converter" \
  -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" \
  -d '{"value":"on"}')
echo "$RESP" | jq .
SUCCESS=$(echo "$RESP" | jq -r '.success // false')
if [[ "$SUCCESS" == "true" ]]; then
  echo "✓ content_converter enabled via zone setting"
else
  echo "Zone setting failed or not entitled (free tier) -> trying Configuration Rule..."
  RULES_RESP=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/rulesets/phases/http_config_settings/entrypoint" \
    -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" \
    -d '{
      "rules": [{
        "expression": "http.host eq \"www.henriqueoliv.pt\" or http.host eq \"henriqueoliv.pt\"",
        "action": "set_config",
        "action_parameters": { "content_converter": true },
        "description": "Enable Markdown for Agents for portfolio"
      }]
    }')
  echo "$RULES_RESP" | jq .
  echo "If success, Markdown conversion will apply at edge for Accept: text/markdown"
fi

echo ""
echo "Validate edge conversion (origin still serves rewrites via Vercel):"
echo "  curl -s -i https://www.henriqueoliv.pt/ -H 'Accept: text/markdown' | head -n 20"
echo "  # expect: content-type: text/markdown; charset=utf-8 + x-markdown-tokens"
echo "  # Vercel fallback rewrites to /index.md with same headers if Cloudflare conversion not active"
