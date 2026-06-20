import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import { SiteTheme } from "@/components/site-theme";
import { TenantNav, TenantFooter } from "@/components/tenant-chrome";
import { HeroSection } from "@/components/blocks/hero-section";
import { Testimonial } from "@/components/ui/testimonial-card";
import { ReserveForm } from "@/components/reserve-form";

export const dynamic = "force-dynamic";

export default async function TenantHome({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  const base = `/${slug}`;
  const preview = site.menu[0]?.items.slice(0, 2).concat(site.menu[1]?.items.slice(0, 2) ?? []) ?? [];

  return (
    <div data-site={site.slug} className="dark flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteTheme site={site} />
      <TenantNav site={site} />

      <HeroSection
        badge={{ text: site.hero.badge, action: { text: "Discover the coast", href: `${base}/experience` } }}
        title={site.hero.title}
        description={site.hero.description}
        actions={[
          { text: "Reserve a Table", href: "#reserve", variant: "glow" },
          { text: "View the Menu", href: `${base}/menu`, variant: "default" },
        ]}
        image={{ light: site.images.hero, dark: site.images.hero, alt: `${site.name} terrace` }}
      />

      <section id="experience" className="mx-auto grid max-w-container items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image src={site.images.story} alt={`${site.name} dining room`} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{site.experience.kicker}</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-5xl">{site.experience.title}</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">{site.experience.body}</p>
          <Link href={`${base}/experience`} className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Our Story
          </Link>
        </div>
      </section>

      <section id="menu" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">A tasting of the coast</p>
            <h2 className="text-4xl md:text-5xl">Signature Plates</h2>
          </div>
          <div className="space-y-7">
            {preview.map((it) => (
              <div key={it.name} className="flex items-baseline gap-4">
                <div className="flex-1">
                  <p className="font-display text-2xl leading-tight">{it.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
                <div className="mb-1 flex-1 border-b border-dashed border-border" />
                <p className="font-display text-2xl text-primary">{it.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`${base}/menu`} className="inline-flex rounded-full border border-primary/60 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              See the Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-container px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Moments</p>
          <h2 className="text-4xl md:text-5xl">A Glimpse of the Evening</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {site.images.gallery.slice(0, 4).map((src, i) => (
            <Link href={`${base}/gallery`} key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border">
              <Image src={src} alt={`${site.name} gallery`} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-container px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Voices of the Coast</p>
          <h2 className="text-4xl md:text-5xl">What Our Guests Say</h2>
          <p className="mt-4 text-muted-foreground">{site.rating} ★ · {site.reviewCount} Google reviews</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {site.reviews.slice(0, 3).map((r) => (
            <Testimonial key={r.name} {...r} />
          ))}
        </div>
      </section>

      <section id="reserve" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-container px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Join us by moonlight</p>
            <h2 className="text-4xl md:text-5xl">Reserve Your Table</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">We&apos;ll confirm your reservation by phone.</p>
          </div>
          <ReserveForm />
        </div>
      </section>

      <TenantFooter site={site} />
    </div>
  );
}
