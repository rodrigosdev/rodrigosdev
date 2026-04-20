/**
 * Protocol for absolute site URLs. Only exact `"production"` uses `https` (matches Node’s `NODE_ENV`).
 */
export const siteUrlProtocol = (nodeEnv?: string): "https" | "http" =>
  nodeEnv === "production" ? "https" : "http";

function normalizeOriginHost(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "localhost:3000";
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      return new URL(trimmed).host;
    } catch {
      return trimmed;
    }
  }
  return trimmed;
}

/**
 * Host (and optional port) for the public site origin.
 * Uses `VERCEL_PROJECT_PRODUCTION_URL` when set; Vercel may also expose preview URLs via other env vars.
 * Trims whitespace; empty values fall back to `localhost:3000`. Values that look like absolute URLs are reduced to `host[:port]`.
 */
export const siteUrlOrigin = (vercelProjectProductionUrl?: string): string =>
  vercelProjectProductionUrl == null
    ? "localhost:3000"
    : normalizeOriginHost(vercelProjectProductionUrl);

/**
 * Canonical absolute site URL for the current process environment (reads `process.env` on each call).
 */
export function getSiteUrl(): string {
  return `${siteUrlProtocol(process.env.NODE_ENV)}://${siteUrlOrigin(
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  )}`;
}
