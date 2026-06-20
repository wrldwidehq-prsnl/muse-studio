import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/blocks/hero-section";
import { Testimonial } from "@/components/ui/testimonial-card";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ReserveForm } from "@/components/reserve-form";

const HERO_IMG =
  "https://www.villageba.com/wp-content/uploads/2024/10/apollonia-banner-scaled-e1704870906347.jpg";
const STORY_IMG =
  "https://www.villageba.com/wp-content/uploads/2024/07/selene-suite.jpg";
const GBASE = "https://www.villageba.com/wp-content/uploads/2024";

const MENU_PREVIEW = [
  { name: "Adriatic Crudo", desc: "Day-boat sea bass, citrus, olive oil", price: "€18" },
  { name: "Black Risotto", desc: "Cuttlefish ink, scampi, aged parmesan", price: "€28" },
  { name: "Lamb Under the Bell", desc: "Montenegrin peka, rosemary jus", price: "€32" },
  { name: "Lattice Moon Panna Cotta", desc: "Vanilla bean, wild-fig compote", price: "€12" },
];

const GALLERY_PREVIEW = [
  `${GBASE}/07/selene-suite.jpg`,
  `${GBASE}/07/double-room.jpg`,
  `${GBASE}/07/junior.jpg`,
  `${GBASE}/10/apollonia-banner-scaled-e1704870906347.jpg`,
];

const REVIEWS = [
  {
    name: "Elena Marković",
    role: "Dinner guest",
    company: "Sveti Stefan",
    rating: 5,
    image: "https://www.villageba.com/wp-content/uploads/2024/07/junior.jpg",
    testimonial:
      "An unforgettable evening — the sea bass was flawless and the terrace at dusk is pure magic. Service that anticipates every need.",
  },
  {
    name: "James Whitfield",
    role: "Traveller",
    company: "London",
    rating: 5,
    image: "https://www.villageba.com/wp-content/uploads/2024/07/double-room.jpg",
    testimonial:
      "The most refined dining on the Montenegrin coast. Quiet luxury, exquisite Adriatic flavours, and a wine list to linger over.",
  },
  {
    name: "Sofia Conti",
    role: "Returning guest",
    company: "Milan",
    rating: 4,
    image: "https://www.villageba.com/wp-content/uploads/2024/07/selene-suite.jpg",
    testimonial:
      "Muse turns dinner into a slow, candlelit ritual. The black risotto and the moonlit views keep drawing us back.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />

      <HeroSection
        badge={{
          text: "Villa Geba · Sveti Stefan",
          action: { text: "Discover the coast", href: "#experience" },
        }}
        title="Moonlit Dining on the Adriatic"
        description="An intimate fine-dining experience where Mediterranean elegance meets Montenegrin hospitality — perched above the pristine waters of Sveti Stefan."
        actions={[
          { text: "Reserve a Table", href: "#reserve", variant: "glow" },
          { text: "View the Menu", href: "/menu", variant: "default" },
        ]}
        image={{ light: HERO_IMG, dark: HERO_IMG, alt: "Muse Restaurant terrace at dusk overlooking the Adriatic" }}
      />

      {/* Experience / story */}
      <section id="experience" className="mx-auto grid max-w-container items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image src={STORY_IMG} alt="Muse dining room" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">A Symphony of Flavours</p>
          <h2 className="mb-6 text-4xl leading-tight md:text-5xl">Crafted by the Sea, Served by Moonlight</h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Set within the boutique Villa Geba, Muse draws on the day&apos;s Adriatic catch and the orchards of the
            Montenegrin coast. Each plate is a quiet study in restraint and craft — paired with refined wines and the
            slow rhythm of a coastal evening.
          </p>
          <a
            href="#reserve"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reserve Your Evening
          </a>
        </div>
      </section>

      {/* Menu preview */}
      <section id="menu" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">A tasting of the coast</p>
            <h2 className="text-4xl md:text-5xl">Signature Plates</h2>
          </div>
          <div className="space-y-7">
            {MENU_PREVIEW.map((it) => (
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
            <Link href="/menu" className="inline-flex rounded-full border border-primary/60 bg-primary/10 px-7 py-3 text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              See the Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section id="gallery" className="mx-auto max-w-container px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Moments at Muse</p>
          <h2 className="text-4xl md:text-5xl">A Glimpse of the Evening</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_PREVIEW.map((src, i) => (
            <Link href="/gallery" key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border">
              <Image src={src} alt="Muse gallery" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-container px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Voices of the Coast</p>
          <h2 className="text-4xl md:text-5xl">What Our Guests Say</h2>
          <p className="mt-4 text-muted-foreground">4.3 ★ · 130 Google reviews</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <Testimonial key={r.name} {...r} />
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="reserve" className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-container px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">Join us by moonlight</p>
            <h2 className="text-4xl md:text-5xl">Reserve Your Table</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              We&apos;ll confirm your reservation by phone. For parties larger than eight, please call us directly.
            </p>
          </div>
          <ReserveForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
