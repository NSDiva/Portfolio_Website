import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Neekita Sahu — Frontend Developer",
  description:
    "Frontend developer & UI engineer building modern, responsive interfaces with React and Next.js — clean design, scroll-linked motion, and performance that ships to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${greatVibes.variable}`}
    >
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}.intro{display:none !important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
