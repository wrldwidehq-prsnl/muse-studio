import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-container gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.35em]">MUSE</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Fine dining &amp; bar at Villa Geba, on the Adriatic coast of Sveti Stefan, Montenegro.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-foreground">Visit</p>
          <p>Vukice Mitrovic, Sveti Stefan 86315</p>
          <p className="mt-2">
            <a href="tel:+38233681590" className="hover:text-foreground">+382 33 681 590</a>
          </p>
          <p>
            <a href="mailto:marketing@villageba.com" className="hover:text-foreground">marketing@villageba.com</a>
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-foreground">Muse</p>
          <p>
            <a href="https://www.villageba.com" className="hover:text-foreground">Part of Villa Geba</a>
          </p>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} Muse Restaurant &amp; Bar · Site by{" "}
            <Link href="https://wrldwide.agency" className="text-primary hover:underline">WRLDWIDE</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
