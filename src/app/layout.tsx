import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AutoThemeByTime } from "@/components/AutoThemeByTime";

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
    default: "FarmsAgora | Empowering Agrotech businesses to move 3× faster.",
    template: "%s | FarmsAgora",
  },
  description: "FarmsAgora — Empowering Agrotech businesses to move 3× faster.",
  applicationName: "FarmsAgora",
  keywords: [
    "Agrotech",
    "Agriculture",
    "Farm digitization",
    "Traceability",
    "Supply chain",
    "Climate-smart agriculture",
    "Partners",
    "ERP implementation",
    "Farmer onboarding",
    "Field activity",
    "Good agricultural practices",
    "Offline-first flows",
    "Reporting",
    "Audits",
    "Adoption",
    "Training",
    "Verified farm activity",
    "Clear metrics",
    "Reporting",
    "Audits",
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
      <body className="min-h-full flex flex-col">
        <AutoThemeByTime />
        {children}
      </body>
    </html>
  );
}
