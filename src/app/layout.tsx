import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Hardware Store - Premium Hardware Solutions",
  description: "Complete hardware solutions for modern builders. Configure custom doors and windows in seconds. Get accurate pricing and quotes for your construction projects in Ramgarh, Jharkhand.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Shiv Hardware Store",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <div className="pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
