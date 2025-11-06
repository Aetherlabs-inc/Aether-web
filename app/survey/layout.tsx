import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
    title: "Survey",
    description: "Help us improve AetherLabs by sharing your feedback. Your input helps us build better art authentication solutions.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SurveyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-background">
            {children}
        </div>
    );
}
