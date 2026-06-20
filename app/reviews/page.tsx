import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Testimonial } from "@/components/ui/testimonial-card";

export const metadata: Metadata = { title: "Reviews — Muse Restaurant & Bar" };

const IMG = "https://www.villageba.com/wp-content/uploads/2024/07";
const REVIEWS = [
  { name: "Elena Marković", role: "Dinner guest", company: "Sveti Stefan", rating: 5, image: `${IMG}/junior.jpg`, testimonial: "An unforgettable evening — the sea bass was flawless and the terrace at dusk is pure magic. Service that anticipates every need." },
  { name: "James Whitfield", role: "Traveller", company: "London", rating: 5, image: `${IMG}/double-room.jpg`, testimonial: "The most refined dining on the Montenegrin coast. Quiet luxury, exquisite Adriatic flavours, and a wine list to linger over." },
  { name: "Sofia Conti", role: "Returning guest", company: "Milan", rating: 4, image: `${IMG}/selene-suite.jpg`, testimonial: "Muse turns dinner into a slow, candlelit ritual. The black risotto and the moonlit views keep drawing us back." },
  { name: "Marko Petrović", role: "Local", company: "Budva", rating: 5, image: `${IMG}/junior.jpg`, testimonial: "Peka lamb under the bell, done the proper way. This is how the coast should taste — and the room is beautiful." },
  { name: "Amelie Rousseau", role: "Anniversary dinner", company: "Paris", rating: 5, image: `${IMG}/double-room.jpg`, testimonial: "We came for our anniversary and left speechless. Every detail, from the lighting to the langoustines, was perfect." },
  { name: "Daniel Berg", role: "Wine lover", company: "Berlin", rating: 4, image: `${IMG}/selene-suite.jpg`, testimonial: "A genuinely thoughtful Montenegrin and Italian list, poured by people who know it. The octopus starter alone is worth the trip." },
];

export default function ReviewsPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />

      <section className="mx-auto max-w-container px-6 pb-6 pt-36 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">Voices of the Coast</p>
        <h1 className="text-5xl md:text-7xl">Guest Reviews</h1>
      </section>

      <section className="mx-auto mb-12 flex max-w-container flex-col items-center px-6">
        <div className="flex items-end gap-4">
          <span className="font-display text-7xl leading-none text-primary">4.3</span>
          <div className="pb-2">
            <p className="text-2xl tracking-[0.2em] text-primary">★★★★★</p>
            <p className="text-sm text-muted-foreground">Based on 130 Google reviews</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <Testimonial key={r.name} {...r} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl">Join them for an evening</h2>
          <a href="/#reserve" className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
