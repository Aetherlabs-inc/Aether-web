import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
    const plans = [
        {
            name: "Artist",
            price: "Free",
            period: "",
            description: "Everything a solo creator needs to start authenticating and showcasing work.",
            features: [
                "Up to 25 artworks",
                "10 authenticity certificates / month",
                "Tap-to-verify (NFC) via Aether viewer",
                "1 portfolio page + basic branding",
                "Provenance timeline (basic)",
                "CSV import (up to 100 rows)",
                "Community support"
            ],
            buttonText: "Start for free",
            buttonVariant: "outline",
            popular: false
        },
        {
            name: "Studio",
            price: "$49",
            period: "per month",
            description: "For growing studios and small galleries managing larger catalogs.",
            features: [
                "Up to 500 artworks",
                "100 authenticity certificates / month",
                "Unlimited portfolios & collections",
                "Exhibitions & shareable certificate viewer",
                "Bulk import & media CDN",
                "Analytics & activity log",
                "3 team seats + role permissions",
                "Priority email support"
            ],
            buttonText: "Start 14-day trial",
            buttonVariant: "default",
            popular: true
        },
        {
            name: "Gallery",
            price: "Custom",
            period: "",
            description: "For professional galleries, museums, and marketplaces.",
            features: [
                "Unlimited artworks & high-volume certificates",
                "Advanced provenance & ownership transfer",
                "White-label viewer + custom branding",
                "API access & webhooks",
                "SSO/SAML, audit logs, IP allowlisting",
                "Regional hosting & data residency",
                "Onboarding & dedicated account manager",
                "24/7 premium support & SLAs"
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outline",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                        Simple, transparent pricing for Aether
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        From solo artists to full galleries—pick a plan that matches your catalog and certificate volume.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl border flex flex-col h-full ${plan.popular ? "border-primary/50 cosmic-glow bg-card" : "border-border cosmic-gradient bg-card"
                                } transition-all duration-300 relative`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-auto">
                                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>

                                <div className="mb-4">
                                    <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                                    {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                                </div>

                                <p className="text-muted-foreground mb-6">{plan.description}</p>

                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button
                                    className={
                                        plan.buttonVariant === "default"
                                            ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                            : "w-full border-border text-foreground hover:bg-muted"
                                    }
                                    variant={plan.buttonVariant as "default" | "outline"}
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnotes / Extras */}
                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-medium tracking-tighter text-foreground">
                        Start authenticating your art with confidence.
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Need extra NFC tags or higher certificate volumes? We offer add-on packs and custom workflows for fairs, auctions, and archives.
                    </p>
                    <div className="text-muted-foreground">
                        Questions? <a href="#" className="text-primary hover:underline">Talk to our team</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
