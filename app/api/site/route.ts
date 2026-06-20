import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-dynamic";

const DIR = process.env.SITES_DIR || path.join(process.cwd(), "data/sites");
const TOKEN = process.env.SITE_UPSERT_TOKEN || "";

// n8n calls this per lead to publish/update a business. No build, instant live.
export async function POST(req: Request) {
  const auth = req.headers.get("authorization") || "";
  if (TOKEN && auth !== `Bearer ${TOKEN}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const site = (body as { site?: Record<string, unknown> }).site ?? (body as Record<string, unknown>);
  const slug = site?.slug;
  if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: "missing or invalid slug" }, { status: 400 });
  }
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(path.join(DIR, `${slug}.json`), JSON.stringify(site, null, 2));
  return NextResponse.json({ ok: true, slug, url: `/${slug}` });
}
