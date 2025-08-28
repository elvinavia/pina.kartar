import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karang Taruna RW 05 (PANCASONA)",
  description: "Website resmi Karang Taruna RW 05 Lowokwaru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 text-gray-800 font-sans`}>
        <Navbar />
        <main className="container mx-auto py-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
