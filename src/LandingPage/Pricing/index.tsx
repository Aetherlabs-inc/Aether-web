'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Pricing = () => {
    const router = useRouter();
    const waitlistCount = 1247; // Dynamic count - can be fetched from API
    const maxSpots = 5000;
    const spotsRemaining = maxSpots - waitlistCount;
    
    const handleJoinWaitlist = () => {
        router.push('/waitlist');
    };
    
    const plans = [
        {
            name: "Artist",
            price: "$29",
            originalPrice: "$49",
            period: "per month",
            discount: "50% off for founding members",
            description: "Perfect for solo creators",
            features: [
                "Up to 50 artworks/year",
                "50 NFC tags included",
                "Blockchain certificates",
                "Online portfolio",
                "Email support"
            ],
            buttonText: "Reserve Your Spot",
            buttonVariant: "outline",
            popular: false
        },
        {
            name: "Studio",
            price: "$99",
            originalPrice: "$149",
            period: "per month",
            discount: "33% off for founding members",
            description: "For growing studios",
            features: [
                "Up to 200 artworks/year",
                "200 NFC tags included",
                "Everything in Artist",
                "Bulk upload tools",
                "Priority support",
                "Advanced analytics"
            ],
            buttonText: "Reserve Your Spot",
            buttonVariant: "default",
            popular: true
        },
        {
            name: "Gallery",
            price: "$299",
            originalPrice: "$399",
            period: "per month",
            discount: "25% off for founding members",
            description: "For professional galleries",
            features: [
                "Unlimited artworks",
                "500 NFC tags included",
                "White-label certificates",
                "API access",
                "Dedicated support",
                "Custom branding",
                "Exhibition management"
            ],
            buttonText: "Reserve Your Spot",
            buttonVariant: "outline",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                        Early Bird Pricing
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Lock in founding member rates before we launch. Only <span className="text-primary font-semibold">{spotsRemaining.toLocaleString()} spots</span> remaining out of {maxSpots.toLocaleString()}.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-sm font-medium text-primary">🔥 {waitlistCount.toLocaleString()}+ artists already secured their spot</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl border flex flex-col h-full ${plan.popular
                                ? "border-primary/50 cosmic-glow bg-card"
                                : "border-border cosmic-gradient bg-card"
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
                                    <div className="flex items-baseline gap-2">
                                        {plan.originalPrice && <span className="text-xl line-through text-muted-foreground">{plan.originalPrice}</span>}
                                        <span className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</span>
                                    </div>
                                    {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                                    {plan.discount && <div className="text-xs text-primary mt-1">{plan.discount}</div>}
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
                                    onClick={handleJoinWaitlist}
                                    className={
                                        plan.buttonVariant === "default"
                                            ? "w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                                            : "w-full border-border text-foreground hover:bg-muted"
                                    }
                                    variant={plan.buttonVariant as "default" | "outline"}
                                >
                                    Join Waitlist - Lock in Pricing
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                        ⚠️ Prices increase after launch. Lock in founding member rates forever.
                    </p>
                    <h3 className="text-2xl font-medium tracking-tighter text-foreground pt-4">
                        Ready to Protect Your Art?
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Join the waitlist and be among the first to authenticate your artwork with blockchain technology. Only <span className="text-primary font-semibold">{spotsRemaining.toLocaleString()} spots</span> left!
                    </p>
                    <Button 
                        onClick={handleJoinWaitlist}
                        className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl px-8 h-12"
                    >
                        Join Waitlist Now - Secure Your Spot
                    </Button>
                    <div className="text-muted-foreground pt-4">
                        Have questions? <a href="mailto:hello@aetherlabs.com" className="text-primary hover:underline">Email us at hello@aetherlabs.com</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
