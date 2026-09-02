# Markdown for Agents — henriqueoliv.pt

Support `Accept: text/markdown` content negotiation so agents can request a markdown representation of HTML pages. HTML remains default for browsers. Response uses `Content-Type: text/markdown; charset=utf-8` and `x-markdown-tokens`.

Refs: https://isitagentready.com/.well-known/agent-skills/markdown-negotiation/SKILL.md · https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/

## How it works (two layers)

1. **Origin (Vercel) fallback — always active**  
   `vercel.json` rewrites requests with `Accept: text/markdown` to a pre-rendered markdown file, preserving `Vary: Accept` for cache variants.

   ```
   /  + Accept: text/markdown  →  /index.md  (Content-Type: text/markdown)
   /index.html + Accept: text/markdown → /index.md
   ```

   Headers (`vercel.json` + `public/_headers` mirrored for Cloudflare Pages/_headers compatibility):
   - `/:` `Link: <...api-catalog>`, `Vary: Accept`
   - `/index.md`: `Content-Type: text/markdown; charset=utf-8`, `Vary: Accept`, `x-markdown-tokens: 1321`, `Cache-Control: public, max-age=3600`
   - `/*.md`: `Content-Type: text/markdown`, `Vary: Accept`

   Markdown source: `public/index.md` (frontmatter + body, 1321 tokens ≈ chars/4). Regenerate token count after editing:
   ```bash
   python3 -c "import pathlib; t=pathlib.Path('public/index.md').read_text(); print(len(t)//4)"
   # then update vercel.json + public/_headers x-markdown-tokens
   ```

2. **Edge (Cloudflare) automatic conversion — preferred when entitled**  
   Cloudflare's network can convert HTML→Markdown at the edge for any zone with *Markdown for Agents* enabled (Pro/Business/Enterprise). When enabled, `curl -H "Accept: text/markdown" https://www.henriqueoliv.pt/` returns `content-type: text/markdown; charset=utf-8`, `vary: accept`, `x-markdown-tokens`, `x-original-tokens` without origin changes.

   Enable:

   **Dashboard (Pro):** Cloudflare → henriqueoliv.pt → AI Crawl Control → *Markdown for Agents ON*

   **API:**
   ```bash
   export CF_API_TOKEN="..." # Zone Settings:Edit
   ./scripts/enable-markdown-for-agents.sh
   # or manually:
   curl -X PATCH "https://api.cloudflare.com/client/v4/zones/{zone_id}/settings/content_converter" \
     -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" -d '{"value":"on"}'
   ```

   For Free tier, use a Configuration Rule (`http_config_settings` phase) with `content_converter: true` — see script fallback.

## Validate

```bash
# HTML default (browser)
curl -s -i https://www.henriqueoliv.pt/ | head -n 20
# content-type: text/html; charset=utf-8

# Markdown via content negotiation (rewrites or edge conversion)
curl -s -i https://www.henriqueoliv.pt/ -H "Accept: text/markdown" | head -n 30
# expect: content-type: text/markdown; charset=utf-8
# expect: vary: Accept
# expect: x-markdown-tokens: <n>

# Direct markdown file
curl -s -i https://www.henriqueoliv.pt/index.md | head -n 20

# Scanner
curl -s -X POST https://isitagentready.com/api/scan -H "Content-Type: application/json" \
  -d '{"url":"https://www.henriqueoliv.pt"}' | jq '.checks.contentAccessibility.markdownNegotiation'
# expect: {"status":"pass"}
```

## Notes

- `Vary: Accept` is required on both HTML and markdown variants so caches (Vercel edge, Cloudflare) store separate variants.
- `x-markdown-tokens` on origin markdown is a static estimate (chars/4 ≈ tokens). Cloudflare edge conversion emits its own `x-markdown-tokens` + `x-original-tokens` with more precise counts — both satisfy the skill.
- Origin rewrites use `has: {type:"header", key:"Accept", value:".*text/markdown.*"}` (case-sensitive key, regex value). Previously used `(?i)` prefix which RE2 rejects — fixed.
