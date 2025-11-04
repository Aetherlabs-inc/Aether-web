import type { Metadata } from "next";
import Footer from "@/src/Footer";
import Link from "next/link";
import React from 'react';
export const metadata: Metadata = {
    title: "Survey",
    description: "Help us improve AetherLabs by sharing your feedback. Your input helps us build better art authentication solutions.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col">
            <header className="flex justify-between items-center p-4 shadow-md">
                <h1 className="text-xl font-semibold">AetherLabs Survey</h1>
                <Link href="/">
                    <button className="text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Exit Survey
                    </button>
                </Link>
            </header>
            <main className="flex-grow p-6 bg-gray-50">{children}</main>
            <Footer />
        </div>
    );
}
