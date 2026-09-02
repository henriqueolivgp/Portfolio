# auth.md

Agent authentication and registration for henriqueoliv.pt

This document describes how AI agents can discover, register, and authenticate to access protected resources at `https://www.henriqueoliv.pt`.

## Audience

AI agents (browser agents, MCP clients, A2A peers) that need programmatic access to portfolio APIs and services.

## Discovery

- **Protected Resource Metadata:** `https://www.henriqueoliv.pt/.well-known/oauth-protected-resource`
- **Authorization Server Metadata:** `https://www.henriqueoliv.pt/.well-known/oauth-authorization-server` and `https://www.henriqueoliv.pt/.well-known/openid-configuration`
- **JWKS:** `https://www.henriqueoliv.pt/.well-known/jwks.json`
- **API Catalog:** `https://www.henriqueoliv.pt/.well-known/api-catalog`

The protected resource identifier is:

```
resource = https://www.henriqueoliv.pt/
authorization_servers = ["https://www.henriqueoliv.pt"]
```

Check `WWW-Authenticate: resource_metadata="https://www.henriqueoliv.pt/.well-known/oauth-protected-resource"` on 401 responses.

## Registration

### Dynamic Client Registration

POST to `https://www.henriqueoliv.pt/oauth/register` (advertised as `registration_endpoint` and `agent_auth.register_uri` in the authorization server metadata).

Example:

```http
POST /oauth/register HTTP/1.1
Host: www.henriqueoliv.pt
Content-Type: application/json

{
  "client_name": "My Agent",
  "grant_types": ["authorization_code", "refresh_token", "client_credentials"],
  "scope": "openid profile email api",
  "redirect_uris": ["https://agent.example.com/callback"]
}
```

Response contains `client_id` and optionally `client_secret`.

### Agent-specific flow (ID-JAG / verified_email / anonymous)

See `agent_auth` in `/.well-known/oauth-authorization-server`:

- `identity_types_supported: ["identity_assertion", "anonymous", "verified_email"]`
- `identity_assertion.assertion_types_supported: ["urn:ietf:params:oauth:token-type:id-jag", "verified_email"]`
- `credential_types_supported: ["client_credentials", "bearer_token", "api_key"]`
- `anonymous.credential_types_supported: ["none", "api_key"]`
- `claim_uri: https://www.henriqueoliv.pt/oauth/claim`
- `revocation_uri: https://www.henriqueoliv.pt/oauth/revoke`

To claim or verify identities after registration, POST assertions to `claim_uri`. To revoke credentials, POST to `revocation_uri`.

## Authentication

1. Discover metadata via `/.well-known/oauth-protected-resource` → `authorization_servers`
2. Fetch `/.well-known/oauth-authorization-server` (or `/.well-known/openid-configuration`) for `authorization_endpoint`, `token_endpoint`, `jwks_uri`
3. Register if needed via `register_uri`
4. Obtain tokens via `token_endpoint` using supported grant types:
   - `authorization_code` + PKCE (`S256`)
   - `refresh_token`
   - `client_credentials`
5. Call APIs with `Authorization: Bearer <token>` (see `bearer_methods_supported: ["header"]` in PRM)

Supported scopes: `openid profile email offline_access api api:read api:write`

## Token Verification

Validate JWTs using `jwks_uri`: `https://www.henriqueoliv.pt/.well-known/jwks.json`. Issuer `https://www.henriqueoliv.pt` must match `aud`/`iss` claims.

## Rate Limits & Status

- Status / health: `https://www.henriqueoliv.pt/api/health`
- Docs: `https://www.henriqueoliv.pt/openapi.json`

## Contact

For manual provisioning, contact `geral@henriqueoliv.pt` with your agent's `client_name` and `redirect_uris`.

## References

- RFC 9728 (Protected Resource Metadata)
- RFC 8414 (Authorization Server Metadata)
- OpenID Connect Discovery 1.0
- https://workos.com/auth.md
