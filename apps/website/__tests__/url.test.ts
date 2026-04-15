import { describe, expect, test } from "bun:test";

import { siteUrlOrigin, siteUrlProtocol, url } from "../lib/url";

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

  test("uses VERCEL_PROJECT_PRODUCTION_URL when set", () => {
    expect(siteUrlOrigin("rodrigosantos.dev")).toBe("rodrigosantos.dev");
    expect(siteUrlOrigin("preview-abc.vercel.app")).toBe(
      "preview-abc.vercel.app"
    );
  });

  test("empty string is kept (nullish coalescing does not treat it as missing)", () => {
    expect(siteUrlOrigin("")).toBe("");
  });
});

describe("url", () => {
  test("matches the composition of helpers for the current process env", () => {
    expect(url).toBe(
      `${siteUrlProtocol(process.env.NODE_ENV)}://${siteUrlOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL)}`
    );
  });

  test("is a valid absolute URL with host", () => {
    expect(url).toMatch(/^https?:\/\/.+/);
    expect(() => new URL(url)).not.toThrow();
  });
});
