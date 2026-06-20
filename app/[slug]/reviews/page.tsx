import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import { SiteTheme } from "@/components/site-theme";
import { TenantNav, TenantFooter } from "@/components/tenant-chrome";
import { Testimonial } from "@/components/ui/testimonial-card";

export const dynamic = "force-dynamic";

export default async function ReviewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  return (
    <div data-site={site.slug} className="dark flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteTheme site={site} />
      <TenantNav site={site} />

      <section className="mx-auto max-w-container px-6 pb-6 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Voices of the Coast</p>
        <h1 className="text-5xl md:text-7xl">Guest Reviews</h1>
      </section>

      <section className="mx-auto mb-12 flex max-w-container flex-col items-center px-6">
        <div className="flex items-end gap-4">
          <span className="font-display text-7xl leading-none text-primary">{site.rating}</span>
          <div className="pb-2">
            <p className="text-2xl tracking-[0.2em] text-primary">★★★★★</p>
            <p className="text-sm text-muted-foreground">Based on {site.reviewCount} Google reviews</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {site.reviews.map((r) => (
            <Testimonial key={r.name} {...r} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl">Join them for an evening</h2>
          <Link href={`/${slug}#reserve`} className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </Link>
        </div>
      </section>

      <TenantFooter site={site} />
    </div>
  );
}
