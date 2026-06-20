import {
  Cormorant_Garamond,
  Fraunces,
  Playfair_Display,
  Jost,
  Manrope,
  Archivo,
} from "next/font/google";

// Each font binds to a stable CSS variable token so the theme can point
// --font-display / --font-body at the chosen one.
const cormorant = Cormorant_Garamond({ variable: "--f-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const fraunces = Fraunces({ variable: "--f-fraunces", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ variable: "--f-playfair", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jost = Jost({ variable: "--f-jost", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const manrope = Manrope({ variable: "--f-manrope", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const archivo = Archivo({ variable: "--f-archivo", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// name (as written in DESIGN.md) -> { font instance, css var token }
export const FONTS: Record<string, { font: { variable: string }; token: string }> = {
  "Cormorant Garamond": { font: cormorant, token: "--f-cormorant" },
  "Fraunces": { font: fraunces, token: "--f-fraunces" },
  "Playfair Display": { font: playfair, token: "--f-playfair" },
  "Jost": { font: jost, token: "--f-jost" },
  "Manrope": { font: manrope, token: "--f-manrope" },
  "Archivo": { font: archivo, token: "--f-archivo" },
};

export function resolveFonts(displayName: string, bodyName: string) {
  const display = FONTS[displayName] ?? FONTS["Cormorant Garamond"];
  const body = FONTS[bodyName] ?? FONTS["Jost"];
  // load every registered font's class so all are available; point the
  // theme variables at the two chosen tokens.
  const variableClasses = Object.values(FONTS)
    .map((f) => f.font.variable)
    .join(" ");
  const style = {
    ["--font-display" as string]: `var(${display.token})`,
    ["--font-body" as string]: `var(${body.token})`,
  } as React.CSSProperties;
  return { variableClasses, style };
}
