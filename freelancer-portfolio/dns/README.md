# DNS for AI Discovery (DNS-AID) — henriqueoliv.pt

Publishes **ServiceMode SVCB/HTTPS** records under the `_agents` namespace per
`draft-mozleywilliams-dnsop-dnsaid-02` and **RFC 9460**, so agents can discover
endpoints via DNS without a third-party registry.

Domain: **henriqueoliv.pt** (and `www.henriqueoliv.pt`) — Cloudflare authoritative NS:
`bailey.ns.cloudflare.com`, `troy.ns.cloudflare.com` — **DNSSEC enabled**.

## Records

Zone file: [`henriqueoliv.pt.dnsaid.zone`](./henriqueoliv.pt.dnsaid.zone)

| Owner | Type | Value |
|---|---|---|
| `_index._agents.henriqueoliv.pt` | `SVCB` | `1 www.henriqueoliv.pt. alpn="mcp" port=443 mandatory=alpn,port key65280=endpoint key65281=well-known …` |
| `_a2a._agents.henriqueoliv.pt` | `SVCB` | `1 www.henriqueoliv.pt. alpn="a2a" port=443 …` |
| `_mcp._agents.henriqueoliv.pt` | `SVCB` | `1 www.henriqueoliv.pt. alpn="mcp" port=443 key65283=bap …` |
| `portfolio.henriqueoliv.pt` | `SVCB` | flat primary owner (§3.1 known-agent) |
| `portfolio._agents.henriqueoliv.pt` | `SVCB` | `0 portfolio.henriqueoliv.pt.` AliasMode walkable |

All records use `alpn` + `port` endpoint parameters and **numeric `keyNNNNN`**
(private-use 65280-65534) for experimental DNS-AID params (`cap`, `well-known`,
`bap`, `endpoint`) until IANA registers them — as required by the skill.

`TargetName` is `www.henriqueoliv.pt.` (no underscores, valid x.509 SAN) pointing
to the MCP server card at `https://www.henriqueoliv.pt/.well-known/mcp/server-card.json`
and the AI catalog at `https://www.henriqueoliv.pt/.well-known/ai-catalog.json`.

## Why SVCB / HTTPS?

- Single query returns TargetName + ALPN + port + hints + custom metadata (cacheable).
- `mandatory=alpn,port` prevents downgrade (RFC 9460 §8).
- For HTTPS origins you may publish `HTTPS` (type 65) instead; SVCB (64) is used here
  for generic service binding. Cloudflare supports both.

## Deploy — Cloudflare Dashboard (manual, 2 min)

1. Cloudflare Dashboard → **henriqueoliv.pt** → **DNS** → **Add record**
2. For each owner above:
   - **Type:** `SVCB` (if not listed, use `HTTPS` and adapt — same wire format)
   - **Name:** `_index._agents` (Cloudflare appends the zone automatically; enter full
     `_index._agents` / `_a2a._agents` / `_mcp._agents`)
   - **Priority:** `1`
   - **Target:** `www.henriqueoliv.pt.`
   - **Params:** `alpn="mcp" port=443 mandatory=alpn,port key65280="endpoint=https://www.henriqueoliv.pt/mcp" key65281="well-known=/.well-known/mcp/server-card.json" key65282="cap=https://www.henriqueoliv.pt/.well-known/ai-catalog.json"`
   - **TTL:** `3600` (or Auto)
3. Save. Repeat for `_a2a._agents` (`alpn="a2a"`) and `_mcp._agents` (`alpn="mcp"` + `key65283="bap=mcp=1.0"`).

> Cloudflare note: if the dashboard rejects `SVCB`, switch type to `HTTPS` — scanners
> accept either (both are ServiceMode per RFC 9460).

## Deploy — Cloudflare API

```bash
export CF_API_TOKEN="your-token-with-Zone:Edit"
export CF_ZONE_ID=$(curl -s -H "Authorization: Bearer $CF_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/zones?name=henriqueoliv.pt" | jq -r '.result[0].id')

# Or use the helper script:
./dns/publish-cloudflare.sh
```

API payload uses `type: "SVCB"` (fallback to `HTTPS` if 400). See script for
idempotent create-or-update logic.

## Deploy — Terraform (cloudflare provider)

```hcl
resource "cloudflare_record" "dnsaid_index" {
  zone_id  = var.cloudflare_zone_id
  name     = "_index._agents"
  type     = "SVCB"
  ttl      = 3600
  priority = 1
  target   = "www.henriqueoliv.pt."
  data {
    alpn      = "mcp"
    port      = 443
    mandatory = "alpn,port"
    # private-use experimental keys (until IANA registration)
    # provider maps these to keyNNNNN wire format
  }
  # raw RDATA if provider lacks structured keys:
  # content = "1 www.henriqueoliv.pt. alpn=\"mcp\" port=443 mandatory=alpn,port key65280=\"endpoint=https://www.henriqueoliv.pt/mcp\" ..."
}

# Alternative: use cloudflare_dns_record (newer provider)
# See https://registry.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/dns_record
```

## DNSSEC

Cloudflare DNSSEC is **enabled** in-zone (verify: `dig DNSKEY henriqueoliv.pt +dnssec`
returns 256 ZSK + 257 KSK with RRSIG). When you add SVCB records, Cloudflare auto-signs
them (`RRSIG` over SVCB RRset) — no extra step for the zone itself.

**Parent DS — required for `AD=1`:** For validating resolvers (Cloudflare `1.1.1.1`,
Google `8.8.8.8`, and isitagentready.com's DoH) to return `AD=true`, the DS record
must be present at the parent `.pt` registry.

- If **Cloudflare is your registrar**: DS is published automatically when you toggle
  **Dashboard → henriqueoliv.pt → DNS → Settings → DNSSEC → Enable**.
- If **external registrar** (e.g. amen.pt, dominios.pt): copy the DS from the same
  Cloudflare DNSSEC page and paste it at your registrar's DNSSEC/DS management.
  Example DS format: `2371 13 2 <sha256>` (Cloudflare shows the exact values).

Check DS propagation:

```bash
dig DS henriqueoliv.pt @1.1.1.1 +short        # should return DS after registrar push
dig DNSKEY henriqueoliv.pt +dnssec +multi    # 256 + 257 keys + RRSIG
delv @1.1.1.1 henriqueoliv.pt DNSKEY         # ; fully validated on success
```

Validate authenticated data after publishing SVCB:

```bash
dig _index._agents.henriqueoliv.pt SVCB +dnssec +multi
delv @1.1.1.1 _index._agents.henriqueoliv.pt SVCB
# DoH (what isitagentready.com uses):
curl -s "https://cloudflare-dns.com/dns-query?name=_index._agents.henriqueoliv.pt&type=64" \
  -H "accept: application/dns-json" | jq
# Expect: "AD": true  and  "Answer": [{"data":"1 www.henriqueoliv.pt. alpn=\"mcp\" ..."}]
```

## Validate (isitagentready.com)

```bash
curl -s -X POST https://isitagentready.com/api/scan \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.henriqueoliv.pt"}' | jq '.checks.discoverability.dnsAid'
# expected: { "status": "pass", ... }
```

Local DoH dry-run:

```bash
./dns/validate-doh.sh
# queries Cloudflare DoH + Google DoH fallback, mimics scanner
```

## References

- Skill: https://isitagentready.com/.well-known/agent-skills/dns-aid/SKILL.md
- Draft: https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/
- RFC 9460: https://www.rfc-editor.org/rfc/rfc9460
- DNSSEC: RFC 9364 — enabled via Cloudflare DNSSEC
