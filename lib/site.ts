import fs from "node:fs";
import path from "node:path";

export type MenuItem = { name: string; desc: string; price: string };
export type Course = { title: string; items: MenuItem[] };
export type Review = { name: string; role: string; company: string; rating: number; image: string; testimonial: string };

export type Site = {
  slug: string;
  brandMark: string;
  name: string;
  city: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  parent: { name: string; url: string };
  rating: number;
  reviewCount: number;
  design: {
    name: string;
    fontDisplay: string;
    fontBody: string;
    colors: Record<string, string>;
  };
  images: { hero: string; story: string; gallery: string[] };
  hero: { badge: string; title: string; description: string };
  experience: { kicker: string; title: string; body: string; values: { t: string; d: string }[] };
  menu: Course[];
  reviews: Review[];
};

// SITES_DIR can point at a mounted volume in production (n8n writes JSON there);
// falls back to the bundled data/sites for local/dev.
const SITES_DIR = process.env.SITES_DIR || path.join(process.cwd(), "data/sites");

export function getSite(slug: string): Site | null {
  try {
    const file = path.join(SITES_DIR, `${slug}.json`);
    if (!fs.existsSync(file)) return null;
    return JSON.parse(fs.readFileSync(file, "utf8")) as Site;
  } catch {
    return null;
  }
}

export function getAllSlugs(): string[] {
  try {
    return fs
      .readdirSync(SITES_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(/\.json$/, ""));
  } catch {
    return [];
  }
}
