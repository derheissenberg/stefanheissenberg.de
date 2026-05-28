/**
 * Smoke tests — fast checks that do not need a browser.
 * Run via: npm test
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

test("sitemap lists all public indexable routes", () => {
  const sitemap = readFileSync(join(root, "app/sitemap.ts"), "utf8");
  const routes = readFileSync(join(root, "lib/seo/sitemap-routes.ts"), "utf8");

  assert.match(sitemap, /PUBLIC_SITEMAP_ROUTES/);
  assert.match(routes, /path: "\/cv"/);
  assert.match(routes, /path: "\/design-portfolio-sh"/);
  assert.match(routes, /path: "\/design-portfolio-sh\/dhl"/);
  assert.match(routes, /path: "\/design-portfolio-sh\/saloodo"/);
  assert.match(routes, /path: "\/design-portfolio-sh\/obinext"/);
  assert.doesNotMatch(routes, /linkedin/i);
});

test("portfolio landing page has index:true metadata", () => {
  const portfolioPage = readFileSync(
    join(root, "app/design-portfolio-sh/page.tsx"),
    "utf8",
  );
  assert.match(portfolioPage, /index:\s*true/);
});

test("case study pages have index:true metadata", () => {
  for (const slug of ["dhl", "saloodo", "obinext"]) {
    const page = readFileSync(
      join(root, `app/design-portfolio-sh/${slug}/page.tsx`),
      "utf8",
    );
    assert.match(page, /index:\s*true/, `${slug} case study should be indexable`);
    assert.doesNotMatch(page, /index:\s*false/, `${slug} case study should not be noindex`);
  }
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
