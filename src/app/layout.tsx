import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/data/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "El Syifa Thea Salsabila — Editor",
  description: site.description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "El Syifa Thea Salsabila — Editor",
    description:
      "Portofolio resmi Editor Naskah Buku & Pengembang Cerita Fiksi (Akad Media Cakrawala, S.Pd. Bahasa & Sastra Indonesia UM).",
    images: [{ url: "/images/el-syifa.jpg", alt: "El Syifa Thea Salsabila" }],
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Editor Naskah Buku & Spesialis Penerbitan",
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Depok",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Negeri Malang",
  },
  worksFor: {
    "@type": "Organization",
    name: "Akad Media Cakrawala",
  },
  sameAs: [site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
