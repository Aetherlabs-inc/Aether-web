import React from "react";
import type { Metadata } from "next";
import NavBar from '@/src/NavBar';
import Footer from "@/src/Footer";


export const metadata: Metadata = {
  title: "Aether",
  description: "Bringing Authenticity to Creativity",
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
