/**
 * Smoke tests — fast checks that do not need a browser.
 * Run via: npm test
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

test("sitemap lists homepage only (noindex portfolio omitted)", () => {
  const sitemap = readFileSync(join(root, "app/sitemap.ts"), "utf8");
  const urlEntries = [...sitemap.matchAll(/url:\s*(`[^`]+`|baseUrl)/g)].map((m) => m[0]);
  assert.equal(urlEntries.length, 1, `expected one sitemap entry, got: ${urlEntries.join(", ")}`);
  assert.match(urlEntries[0], /baseUrl/);
  assert.doesNotMatch(sitemap, /url:\s*[`'"]https?:\/\/[^`'"]*design-portfolio-sh/);
  assert.doesNotMatch(sitemap, /url:\s*[`'"]https?:\/\/[^`'"]*linkedin/i);
});

test("portfolio pages keep noindex metadata", () => {
  const portfolioPage = readFileSync(
    join(root, "app/design-portfolio-sh/page.tsx"),
    "utf8",
  );
  assert.match(portfolioPage, /index:\s*false/);
});

test("shared trust badge data exists", () => {
  assert.ok(existsSync(join(root, "lib/data/trust-badges.ts")));
  const data = readFileSync(join(root, "lib/data/trust-badges.ts"), "utf8");
  assert.match(data, /TRUST_BADGE_LOGOS/);
  assert.match(data, /comprix-design-award/);
});

test("typography utilities are defined", () => {
  const css = readFileSync(join(root, "app/globals.css"), "utf8");
  assert.match(css, /\.font-outfit\b/);
  assert.match(css, /\.type-kicker\b/);
});
