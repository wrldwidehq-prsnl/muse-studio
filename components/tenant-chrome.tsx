"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Site } from "@/lib/site";

export function TenantNav({ site }: { site: Site }) {
  const base = `/${site.slug}`;
  const pathname = usePathname();
  const nav = [
    { label: "Experience", href: `${base}/experience` },
    { label: "Menu", href: `${base}/menu` },
    { label: "Gallery", href: `${base}/gallery` },
    { label: "Reviews", href: `${base}/reviews` },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-container items-center justify-between px-6">
        <Link href={base} className="font-display text-2xl tracking-[0.35em] text-foreground">
          {site.brandMark}
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                pathname === n.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <Link
          href={`${base}#reserve`}
          className="rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Reserve
        </Link>
      </nav>
    </header>
  );
}

export function TenantFooter({ site }: { site: Site }) {
  return (
    <footer className="mt-12 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-container gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.35em]">{site.brandMark}</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{site.name} — {site.city}.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-foreground">Visit</p>
          <p>{site.address}</p>
          <p className="mt-2"><a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a></p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-foreground">{site.brandMark}</p>
          {site.parent?.url && (
            <p><a href={site.parent.url} className="hover:text-foreground">Part of {site.parent.name}</a></p>
          )}
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} {site.name} · Site by{" "}
            <a href="https://wrldwide.agency" className="text-primary hover:underline">WRLDWIDE</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
