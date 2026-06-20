import Link from "next/link";
import { notFound } from "next/navigation";
import { getSite } from "@/lib/site";
import { SiteTheme } from "@/components/site-theme";
import { TenantNav, TenantFooter } from "@/components/tenant-chrome";

export const dynamic = "force-dynamic";

export default async function MenuPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  return (
    <div data-site={site.slug} className="dark flex min-h-full flex-1 flex-col bg-background text-foreground">
      <SiteTheme site={site} />
      <TenantNav site={site} />
      <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">A tasting of the coast</p>
        <h1 className="text-5xl md:text-7xl">The Menu</h1>
      </section>
      <section className="mx-auto w-full max-w-3xl px-6 pb-28">
        {site.menu.map((course) => (
          <div key={course.title} className="mb-14">
            <h2 className="mb-7 text-center text-sm uppercase tracking-[0.3em] text-primary">{course.title}</h2>
            <div className="space-y-7">
              {course.items.map((it) => (
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
          </div>
        ))}
        <div className="text-center">
          <Link href={`/${slug}#reserve`} className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </Link>
        </div>
      </section>
      <TenantFooter site={site} />
    </div>
  );
}
