'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader, ShieldCheck, ScanLine, Sparkles } from 'lucide-react';
import Dashboard from './demo/dashboardPreview';

/**
 * Aether – Hero Section (tailored)
 * - Messaging focuses on NFC authentication + provenance + portfolio tools
 * - Clear CTAs: Scan demo tag / Book a demo
 * - Polished microcopy + accessible labels
 */
const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Cosmic particle effect (background dots) */}
            <div className="absolute inset-0 cosmic-grid opacity-30" aria-hidden />

            {/* Gradient glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
                <div className="w-full h-full opacity-10 bg-primary blur-[120px]" aria-hidden />
            </div>

            {/* Headline & pitch */}
            <div
                className={
                    `relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`
                }
            >
                {/* Status pill */}
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
                        <span className="flex h-2 w-2 rounded-full bg-primary" />
                        New: NFC-backed Certificates
                        <Loader className="h-3 w-3 animate-spin text-primary" aria-hidden />
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
                    Art Authentication & Management for
                    <span className="block">Artists, Galleries & Collectors</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                    Aether links physical artworks to <span className="font-medium text-foreground">secure NFC tags</span> and
                    <span className="font-medium text-foreground"> verifiable certificates</span>. Create portfolios, track provenance,
                    and share trust with buyers — all in one modern workspace.
                </p>

                {/* Key value props */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                        <ShieldCheck className="h-4 w-4" /> Tamper‑evident provenance
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                        <ScanLine className="h-4 w-4" /> Tap‑to‑verify with NFC
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                        <Sparkles className="h-4 w-4" /> Beautiful artist portfolios
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
                    <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/80 text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
                        aria-label="Scan a demo NFC tag"
                    >
                        Scan a demo tag
                    </Button>
                    <Button
                        variant="outline"
                        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
                        aria-label="Book a product demo"
                    >
                        Book a demo
                    </Button>
                </div>

                <div className="pt-2 text-xs text-muted-foreground">
                    No credit card required · Free 14‑day trial
                </div>
            </div>

            <div className='flex flex-col justify-center items-center p-3 w-full h-full max-w-7xl mx-auto'>
                <Dashboard />
            </div>


        </section>
    );
};

export default HeroSection;
