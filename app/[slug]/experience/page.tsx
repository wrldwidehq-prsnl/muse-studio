import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import { SiteTheme } from "@/components/site-theme";
import { TenantNav, TenantFooter } from "@/components/tenant-chrome";

export const dynamic = "force-dynamic";

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  return (
    <div data-site={site.slug} className="dark flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteTheme site={site} />
      <TenantNav site={site} />

      <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">The {site.brandMark} Experience</p>
        <h1 className="text-5xl md:text-7xl">Our Story</h1>
      </section>

      <section className="mx-auto grid max-w-container items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image src={site.images.story} alt={`${site.name}`} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{site.experience.kicker}</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-5xl">{site.experience.title}</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">{site.experience.body}</p>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-container gap-10 px-6 py-20 md:grid-cols-3">
          {site.experience.values.map((v) => (
            <div key={v.t}>
              <h3 className="mb-3 text-2xl">{v.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl">Taste the coast for yourself</h2>
        <Link href={`/${slug}/menu`} className="inline-flex rounded-full border border-primary/60 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          Explore the Menu
        </Link>
      </section>

      <TenantFooter site={site} />
    </div>
  );
}
