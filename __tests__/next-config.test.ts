import { beforeAll, describe, expect, test } from "bun:test";

import nextConfig from "~/next.config";

describe("next.config", () => {
  test("configures image formats", () => {
    expect(nextConfig.images?.formats).toEqual(["image/avif", "image/webp"]);
  });

  test("enables React Compiler", () => {
    expect(nextConfig.reactCompiler).toBe(true);
  });

  describe("redirects", () => {
    let redirects: Awaited<ReturnType<NonNullable<typeof nextConfig.redirects>>>;

    beforeAll(async () => {
      redirects = await nextConfig.redirects!();
    });

    test("defines redirects", () => {
      expect(redirects).toBeDefined();
      expect(Array.isArray(redirects)).toBe(true);
      expect(redirects.length).toBe(1);
    });

    test("all redirects are permanent and point to /", () => {
      for (const redirect of redirects) {
        expect(redirect.destination).toBe("/");
        expect(redirect.permanent).toBe(true);
      }
    });

    test("cover expected legacy routes", () => {
      const sources = redirects.map((r) => r.source);

      expect(sources).toContain("/blog/:path*");
    });
  });
});
