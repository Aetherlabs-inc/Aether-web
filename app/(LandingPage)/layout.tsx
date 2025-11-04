import React from "react";
import type { Metadata } from "next";
import NavBar from '@/src/NavBar';
import Footer from "@/src/Footer";


export const metadata: Metadata = {
  title: "AetherLabs - Art Authentication Platform",
  description: "Bringing Authenticity to Creativity. AetherLabs provides NFC-enabled certificates of authenticity for artists, galleries, and collectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
