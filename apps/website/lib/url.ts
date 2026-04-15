/** Protocol for absolute URLs: https in production, http otherwise. */
export const siteUrlProtocol = (nodeEnv?: string): "https" | "http" =>
  nodeEnv === "production" ? "https" : "http";

/**
 * Host (and optional port) for the public site URL.
 */
export const siteUrlOrigin = (vercelProjectProductionUrl?: string): string =>
  // `??` does not treat "" as missing.
  vercelProjectProductionUrl ?? "localhost:3000";

export const url = `${siteUrlProtocol(process.env.NODE_ENV)}://${siteUrlOrigin(
  process.env.VERCEL_PROJECT_PRODUCTION_URL
)}`;
