import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Great_Vibes } from "next/font/google";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  applicationName: site.title,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: site.role,
    image: `${site.url}/opengraph-image`,
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Three.js",
      "Frontend Development",
      "UI Engineering",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url: site.url,
    author: { "@type": "Person", name: site.name },
    inLanguage: "en",
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
