"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Experience", href: "/experience" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
];

export function SiteNav() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-container items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl tracking-[0.35em] text-foreground">
          MUSE
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => {
            const active = n.href.startsWith("/") && !n.href.includes("#") && pathname === n.href;
            return (
              <Link
                key={n.label}
                href={n.href}
                className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/#reserve"
          className="rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Reserve
        </Link>
      </nav>
    </header>
  );
}
