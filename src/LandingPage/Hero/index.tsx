'use client'
import React, { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';

import DashboardPreview from './DashboardPreview';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background font-inter">

        {/* Cosmic particle effect (background dots) */}

        <div className="absolute inset-0 cosmic-grid opacity-30"></div>



        {/* Gradient glow effect */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">

            <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>

        </div>



        <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div className="flex justify-center">

                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">

                    <span className="flex h-2 w-2 rounded-full bg-primary"></span>

                    🚀 Launching Fall 2026 - Limited Early Access

                </span>

            </div>



            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">

                Authenticate Your Art. <span className="text-foreground">Protect Your Legacy.</span>

            </h1>



            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">

                Stop worrying about counterfeits. Aether combines NFC technology and blockchain security to create unforgeable certificates of authenticity—giving your artwork the protection it deserves.

            </p>



            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">

                <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]" onClick={() => window.location.href = '/waitlist'}>

                    Get Early Access

                </Button>

                <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">

                    Watch Demo

                </Button>

            </div>



            <div className="pt-6 text-sm text-muted-foreground">

                ✓ Join 1,000+ artists on the waitlist • ✓ Founding member pricing locked in • ✓ Be first to launch when we go live

            </div>

        </div>

        {/* Dashboard Preview integrated in hero section with glassmorphic effect */}
        <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
                <div className="max-h-[800px] overflow-y-auto">
                    <DashboardPreview />
                </div>
            </div>
        </div>
    </section>;
};
export default HeroSection;