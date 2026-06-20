#!/usr/bin/env node
// Generate the site theme from a DESIGN.md (awesome-design-md format).
// Usage: node scripts/gen-theme.mjs [design/active.design.md]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const designPath = path.resolve(ROOT, process.argv[2] || "design/active.design.md");

const raw = fs.readFileSync(designPath, "utf8");
const m = raw.match(/^---\n([\s\S]*?)\n---/);
if (!m) {
  console.error("No YAML frontmatter found in", designPath);
  process.exit(1);
}
const fm = yaml.load(m[1]) || {};
const c = fm.colors || {};
const t = fm.typography || {};
const r = fm.rounded || {};

// Map a brand design system onto shadcn/ui token variables.
const bg = c.bg || c.surface || c.neutral || "#0F0E11";
const surface = c.surface || c.bg2 || "#1C1B1F";
const text = c.text || "#F7F5F3";
const muted = c.muted || c.accent2 || "#B29575";
const accent = c.accent || c.primary || "#B29575";
const accent2 = c.accent2 || c.secondary || "#6E5F4A";
const border = c.border || "rgba(255,255,255,0.08)";
const input = c.input || "rgba(255,255,255,0.14)";
const radius = r.md || r.lg || "12px";

const tokens = {
  background: bg,
  foreground: text,
  card: surface,
  "card-foreground": text,
  popover: surface,
  "popover-foreground": text,
  primary: accent,
  "primary-foreground": bg,
  secondary: surface,
  "secondary-foreground": text,
  muted: surface,
  "muted-foreground": muted,
  accent: accent2,
  "accent-foreground": text,
  destructive: c.danger || "#DC2626",
  "destructive-foreground": text,
  border,
  input,
  ring: accent,
  radius,
};

const lines = Object.entries(tokens)
  .map(([k, v]) => `  --${k}: ${v};`)
  .join("\n");

const css = `/* AUTO-GENERATED from ${path.relative(ROOT, designPath)} — do not edit by hand. */
/* Source design system: ${fm.name || "unnamed"} */
:root, .dark {
${lines}
}
`;
fs.writeFileSync(path.resolve(ROOT, "app/theme.css"), css);

const config = {
  name: fm.name || "Theme",
  display: t.display || t.heading || "Cormorant Garamond",
  body: t.body || "Jost",
};
fs.writeFileSync(path.resolve(ROOT, "theme.config.json"), JSON.stringify(config, null, 2));

console.log(`theme generated from "${fm.name}" -> app/theme.css + theme.config.json`);
console.log(`  fonts: display="${config.display}" body="${config.body}"`);
