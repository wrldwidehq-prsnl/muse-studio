import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Gallery — Muse Restaurant & Bar" };

const B = "https://www.villageba.com/wp-content/uploads/2024";
const TILES = [
  { src: `${B}/10/apollonia-banner-scaled-e1704870906347.jpg`, alt: "Terrace at dusk", span: "md:col-span-2 md:row-span-2" },
  { src: `${B}/07/selene-suite.jpg`, alt: "Selene dining room", span: "" },
  { src: `${B}/07/junior.jpg`, alt: "Intimate corner", span: "" },
  { src: `${B}/07/double-room.jpg`, alt: "Coastal interior", span: "md:col-span-2" },
  { src: `${B}/07/selene-suite.jpg`, alt: "Evening light", span: "" },
  { src: `${B}/10/apollonia-banner-scaled-e1704870906347.jpg`, alt: "Adriatic view", span: "" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />
      <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Moments at Muse</p>
        <h1 className="text-5xl md:text-7xl">Gallery</h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Moonlit terraces, the glow of the dining room, and the slow luxury of an evening on the Adriatic.
        </p>
      </section>
      <section className="mx-auto w-full max-w-container px-6 pb-28">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {TILES.map((t, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl border border-border ${t.span}`}>
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {t.alt}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="/#reserve" className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
