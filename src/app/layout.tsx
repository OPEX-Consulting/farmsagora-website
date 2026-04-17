import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FarmsAgora | Profitable Agriculture For All",
    template: "%s | FarmsAgora",
  },
  description:
    "FarmsAgora — Profitable Agriculture For All. Buy and sell, connect with farmers, and discover warehouses and storage facilities.",
  applicationName: "FarmsAgora",
  keywords: [
    "Agrotech",
    "Agriculture",
    "Farm digitization",
    "Traceability",
    "Supply chain",
    "Climate-smart agriculture",
    "Partners",
  ],
  openGraph: {
    title: "FarmsAgora | Profitable Agriculture For All",
    description:
      "Buy and sell, connect with farmers, and discover warehouses and storage facilities.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
