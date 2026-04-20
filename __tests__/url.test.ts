import { afterEach, beforeEach, describe, expect, test } from "bun:test";

import { getSiteUrl, siteUrlOrigin, siteUrlProtocol } from "~/lib/url";

describe("siteUrlProtocol", () => {
  test("uses https when NODE_ENV is production", () => {
    expect(siteUrlProtocol("production")).toBe("https");
  });

  test("uses http for development and other non-production values", () => {
    expect(siteUrlProtocol("development")).toBe("http");
    expect(siteUrlProtocol("test")).toBe("http");
    expect(siteUrlProtocol("staging")).toBe("http");
  });

  test("uses http when NODE_ENV is omitted", () => {
    expect(siteUrlProtocol()).toBe("http");
  });

  test("is case-sensitive: only lowercase production gets https", () => {
    expect(siteUrlProtocol("PRODUCTION")).toBe("http");
  });
});

describe("siteUrlOrigin", () => {
  test("falls back to localhost:3000 when VERCEL_PROJECT_PRODUCTION_URL is unset", () => {
    expect(siteUrlOrigin()).toBe("localhost:3000");
  });

  test("uses host when set (hostname or hostname:port)", () => {
    expect(siteUrlOrigin("rodrigosantos.dev")).toBe("rodrigosantos.dev");
    expect(siteUrlOrigin("preview-abc.vercel.app")).toBe("preview-abc.vercel.app");
  });

  test("treats empty or whitespace-only as missing", () => {
    expect(siteUrlOrigin("")).toBe("localhost:3000");
    expect(siteUrlOrigin("   ")).toBe("localhost:3000");
  });

  test("reduces absolute URLs to host[:port]", () => {
    expect(siteUrlOrigin("https://rodrigosantos.dev")).toBe("rodrigosantos.dev");
    expect(siteUrlOrigin("http://localhost:3000")).toBe("localhost:3000");
    expect(siteUrlOrigin("https://preview-abc.vercel.app/some/path")).toBe(
      "preview-abc.vercel.app",
    );
  });
});

describe("getSiteUrl", () => {
  const env = process.env as Record<string, string | undefined>;
  let nodeEnv: string | undefined;
  let vercelProjectProductionUrl: string | undefined;

  beforeEach(() => {
    nodeEnv = env.NODE_ENV;
    vercelProjectProductionUrl = env.VERCEL_PROJECT_PRODUCTION_URL;
  });

  afterEach(() => {
    if (nodeEnv === undefined) delete env.NODE_ENV;
    else env.NODE_ENV = nodeEnv;
    if (vercelProjectProductionUrl === undefined) delete env.VERCEL_PROJECT_PRODUCTION_URL;
    else env.VERCEL_PROJECT_PRODUCTION_URL = vercelProjectProductionUrl;
  });

  test("composes protocol and origin from current env", () => {
    env.NODE_ENV = "development";
    delete env.VERCEL_PROJECT_PRODUCTION_URL;
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  test("uses https in production", () => {
    env.NODE_ENV = "production";
    env.VERCEL_PROJECT_PRODUCTION_URL = "example.com";
    expect(getSiteUrl()).toBe("https://example.com");
  });

  test("normalizes a full URL in VERCEL_PROJECT_PRODUCTION_URL", () => {
    env.NODE_ENV = "production";
    env.VERCEL_PROJECT_PRODUCTION_URL = "https://example.com/path";
    expect(getSiteUrl()).toBe("https://example.com");
  });

  test("returns a valid absolute URL with host", () => {
    env.NODE_ENV = "development";
    env.VERCEL_PROJECT_PRODUCTION_URL = "localhost:3000";
    const u = getSiteUrl();
    expect(u).toMatch(/^https?:\/\/.+/);
    expect(() => new URL(u)).not.toThrow();
  });
});
