import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Menu — Muse Restaurant & Bar" };

type Item = { name: string; desc: string; price: string };
type Course = { title: string; items: Item[] };

const MENU: Course[] = [
  {
    title: "Starters",
    items: [
      { name: "Adriatic Crudo", desc: "Day-boat sea bass, citrus, Montenegrin olive oil", price: "€18" },
      { name: "Octopus & Fava", desc: "Slow-cooked octopus, broad-bean purée, smoked paprika", price: "€22" },
      { name: "Burrata della Costa", desc: "Stracciatella, fig, toasted pine, aged balsamic", price: "€16" },
    ],
  },
  {
    title: "From the Adriatic",
    items: [
      { name: "Black Risotto", desc: "Cuttlefish ink, scampi, aged parmesan", price: "€28" },
      { name: "Whole Sea Bream", desc: "Salt-baked, herbs, lemon, sea vegetables", price: "€34" },
      { name: "Grilled Langoustines", desc: "Garlic butter, chili, charred lemon", price: "€38" },
    ],
  },
  {
    title: "From the Land",
    items: [
      { name: "Lamb Under the Bell", desc: "Montenegrin peka, root vegetables, rosemary jus", price: "€32" },
      { name: "Aged Ribeye", desc: "300g, smoked sea salt, bone-marrow butter", price: "€42" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Lattice Moon Panna Cotta", desc: "Vanilla bean, wild-fig compote", price: "€12" },
      { name: "Dark Chocolate & Olive Oil", desc: "Sea salt, candied orange", price: "€13" },
    ],
  },
  {
    title: "Wine & Cocktails",
    items: [
      { name: "Coastal Wine Flight", desc: "Three Montenegrin & Italian pours", price: "€24" },
      { name: "Moonlit Negroni", desc: "Barrel-aged, orange bitters, Adriatic herbs", price: "€14" },
    ],
  },
];

function PageHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="mx-auto max-w-container px-6 pb-10 pt-36 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>
      <h1 className="text-5xl md:text-7xl">{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{sub}</p>}
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteNav />
      <PageHeader kicker="A tasting of the coast" title="The Menu" sub="Seasonal Adriatic cooking — sourced from the day's catch and the orchards of the Montenegrin coast." />
      <section className="mx-auto w-full max-w-3xl px-6 pb-28">
        {MENU.map((course) => (
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
          <a href="/#reserve" className="inline-flex rounded-full bg-primary px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90">
            Reserve a Table
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
