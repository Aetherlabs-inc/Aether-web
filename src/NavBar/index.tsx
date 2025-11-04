'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ThemeSwitcher, ThemeSwitcherWithLabel } from '@/components/themeSwitcher';

const Header = () => {
    const [activePage, setActivePage] = useState('features');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (page: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActivePage(page);
        const element = document.getElementById(page);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };


    return (
        <div className="sticky top-0 z-50 pt-8 px-4">
            <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
                <div className="p-3">
                    <span
                        aria-label="AetherLabs"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-background font-semibold tracking-tight"
                    >
                        ÆL
                    </span>
                    <span className="text-xl font-medium tracking-tight text-foreground"> AetherLabs</span>

                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
                        <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
                            <ToggleGroupItem
                                value="features"
                                className={cn(
                                    "px-4 py-2 rounded-full transition-colors relative",
                                    activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                )}
                                onClick={handleNavClick('features')}
                            >
                                Features
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="pricing"
                                className={cn(
                                    "px-4 py-2 rounded-full transition-colors relative",
                                    activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                )}
                                onClick={handleNavClick('pricing')}
                            >
                                Pricing
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                </nav>

                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                onClick={handleNavClick('features')}
                            >
                                Features
                            </a>
                            <a
                                href="#pricing"
                                className={`px-3 py-2 text-sm rounded-md transition-colors ${activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                onClick={handleNavClick('pricing')}
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="px-3 py-2 text-sm rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                            >
                                FAQ
                            </a>

                            {/* Add theme toggle for mobile */}
                            <ThemeSwitcherWithLabel />
                        </div>
                    </div>
                )}

                <div className="hidden md:flex items-center gap-4">
                    {/* Theme toggle for desktop */}
                    <ThemeSwitcher />
                    <div className="rounded-2xl">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join Waitlist</Button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
