import "./globals.css";
import Head from "next/head";
import { ReactNode } from "react";

export const metadata = {
  title: "Steirarein – Mit Herz, Geduld und Erfahrung",
  description:
    "Steirarein – Haushaltsbetreuung & Reinigung. Gründliche Reinigung, Wäsche, Einkäufe, Kochen, Organisation. Kontakt: 0660 530 7701",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* hCaptcha script */}
        <script src="https://hcaptcha.com/1/api.js" async defer />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/hero-image.jpg" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
