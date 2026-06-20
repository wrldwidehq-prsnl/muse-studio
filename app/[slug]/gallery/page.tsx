import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import { SiteTheme } from "@/components/site-theme";
import { TenantNav, TenantFooter } from "@/components/tenant-chrome";

export const dynamic = "force-dynamic";

export default async function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  const g = site.images.gallery;
  const tiles = [
    { src: g[0], span: "md:col-span-2 md:row-span-2" },
    { src: g[1], span: "" },
    { src: g[2], span: "" },
    { src: g[3] ?? g[0], span: "md:col-span-2" },
    { src: g[1], span: "" },
    { src: g[2], span: "" },
  ];

  return (
    <div data-site={site.slug} className="dark flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteTheme site={site} />
      <TenantNav site={site} />
      <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Moments at {site.brandMark}</p>
        <h1 className="text-5xl md:text-7xl">Gallery</h1>
      </section>
      <section className="mx-auto w-full max-w-container px-6 pb-28">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((t, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl border border-border ${t.span}`}>
              <Image src={t.src} alt={`${site.name} gallery`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href={`/${slug}#reserve`} className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </Link>
        </div>
      </section>
      <TenantFooter site={site} />
    </div>
  );
}
