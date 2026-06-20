import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Experience — Muse Restaurant & Bar" };

const IMG_A = "https://www.villageba.com/wp-content/uploads/2024/07/selene-suite.jpg";
const IMG_B = "https://www.villageba.com/wp-content/uploads/2024/07/double-room.jpg";

const VALUES = [
  { t: "Of the Coast", d: "Every plate begins with the day's Adriatic catch and the orchards of the Montenegrin shore." },
  { t: "Quiet Luxury", d: "No spectacle — only craft, restraint, and the slow rhythm of a coastal evening." },
  { t: "A Sense of Place", d: "Dining woven into Villa Geba and the moonlit waters of Sveti Stefan." },
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />

      <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Muse Experience</p>
        <h1 className="text-5xl md:text-7xl">Our Story</h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          A restaurant born of the sea, the stone, and the long Adriatic evenings of Sveti Stefan.
        </p>
      </section>

      <section className="mx-auto grid max-w-container items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image src={IMG_A} alt="The Muse dining room" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Within Villa Geba</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-5xl">A Table Above the Sea</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Set within the boutique Villa Geba, Muse looks out over the pristine waters of Sveti Stefan. What began as a
            single chef&apos;s table has become the coast&apos;s most quietly celebrated dining room — a place where
            Mediterranean elegance meets the warmth of Montenegrin hospitality.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-container gap-10 px-6 py-20 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t}>
              <h3 className="mb-3 text-2xl">{v.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-container items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">From the Kitchen</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-5xl">Crafted with Restraint</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Our kitchen works in the old coastal way — peka under the bell, salt-baked fish, slow-cooked octopus — but
            with a precision and lightness that lets the Adriatic speak for itself. Pairings are chosen from the wines of
            Montenegro and across the sea.
          </p>
          <a href="/menu" className="mt-8 inline-flex rounded-full border border-primary/60 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Explore the Menu
          </a>
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-border md:order-2">
          <Image src={IMG_B} alt="Coastal interior" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
