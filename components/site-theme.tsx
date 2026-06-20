import type { Site } from "@/lib/site";

// Runtime theming: emits a Google-Fonts link + scoped CSS variables for this
// business, so ONE app renders any slug's bespoke theme with no build step.
export function SiteTheme({ site }: { site: Site }) {
  const c = site.design.colors;
  const fam = (n: string) => n.trim().replace(/\s+/g, "+");
  const href = `https://fonts.googleapis.com/css2?family=${fam(site.design.fontDisplay)}:wght@400;500;600;700&family=${fam(
    site.design.fontBody
  )}:wght@300;400;500;600&display=swap`;
  const css = `[data-site="${site.slug}"]{
  --background:${c.bg}; --foreground:${c.text};
  --card:${c.surface}; --card-foreground:${c.text};
  --popover:${c.surface}; --popover-foreground:${c.text};
  --primary:${c.accent}; --primary-foreground:${c.bg};
  --secondary:${c.surface}; --secondary-foreground:${c.text};
  --muted:${c.surface}; --muted-foreground:${c.muted};
  --accent:${c.accent2}; --accent-foreground:${c.text};
  --destructive:#DC2626; --destructive-foreground:${c.text};
  --border:${c.border}; --input:${c.input}; --ring:${c.accent}; --radius:${c.radius};
  --font-display:'${site.design.fontDisplay}', Georgia, serif;
  --font-body:'${site.design.fontBody}', system-ui, sans-serif;
  background:${c.bg}; color:${c.text};
}
[data-site] h1,[data-site] h2,[data-site] h3,[data-site] h4{font-family:var(--font-display);letter-spacing:-0.01em}
[data-site]{font-family:var(--font-body)}`;
  return (
    <>
      <link rel="stylesheet" href={href} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </>
  );
}
