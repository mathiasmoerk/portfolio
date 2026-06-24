import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
