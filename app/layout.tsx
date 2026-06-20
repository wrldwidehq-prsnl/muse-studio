import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { resolveFonts } from "@/lib/fonts";
import themeConfig from "@/theme.config.json";

// Theme + fonts are generated from design/active.design.md (see scripts/gen-theme.mjs).
const { variableClasses, style } = resolveFonts(themeConfig.display, themeConfig.body);

export const metadata: Metadata = {
  title: "Muse Restaurant & Bar — Sveti Stefan, Montenegro",
  description:
    "Fine dining and bar on the Adriatic coast at Villa Geba, Sveti Stefan. Moonlit Mediterranean dining.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${variableClasses} dark h-full antialiased`}
      style={style}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
