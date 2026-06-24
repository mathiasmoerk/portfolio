import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathias Mørk - Product Designer",
  description:
    "Portfolio of Mathias Mørk, a product designer crafting clear, calm, and usable software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        {/* Fixed-width page column. Everything - including full-bleed section
            backgrounds - is contained here; the viewport sides are white space. */}
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col border-x border-line bg-paper">
          {children}
        </div>
      </body>
    </html>
  );
}
