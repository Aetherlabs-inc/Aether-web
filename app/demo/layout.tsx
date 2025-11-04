import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo",
  description: "Experience AetherLabs art authentication platform with our interactive demo. See how NFC-enabled certificates of authenticity work.",
  keywords: [
    'AetherLabs demo',
    'art authentication demo',
    'NFC certificate demo',
    'art authentication platform demo',
    'AetherLabs platform demo'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aetherlabs.art/demo',
    siteName: 'AetherLabs',
    title: 'Demo | AetherLabs',
    description: 'Experience AetherLabs art authentication platform with our interactive demo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo | AetherLabs',
    description: 'Experience AetherLabs art authentication platform with our interactive demo.',
    creator: '@AetherLabs',
    site: '@AetherLabs',
  },
  alternates: {
    canonical: 'https://aetherlabs.art/demo',
  },
}

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>

  )
}
