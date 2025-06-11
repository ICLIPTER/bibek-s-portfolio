import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibek Sabat | Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://bibeksabat.com"),
  
  // Basic metadata
  applicationName: "Bibek Sabat Portfolio",
  authors: [{ name: "Bibek Sabat" }],
  keywords: ["Full Stack Developer", "Web3", "Blockchain", "Next.js", "React", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://bibeksabat.com",
    title: "Bibek Sabat | Full Stack Developer",
    description: "Full Stack Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Bibek Sabat Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bibek Sabat - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://bibeksabat.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}