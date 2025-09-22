'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, CloudUpload, ServerCogIcon } from 'lucide-react';
import { LockClosedIcon } from '@radix-ui/react-icons';

export default function HowItWorks() {
    const steps = [
        {
            icon: <CloudUpload className="h-8 w-8 text-primary" />,
            title: 'Step 1: Register Your Artwork',
            description:
                'Upload your artwork to our platform. Each piece will be assigned a digital certificate of authenticity stored securely on the blockchain.',
        },
        {
            icon: <LockClosedIcon className="h-8 w-8 text-primary" />,
            title: 'Step 2: Attach NFC Tag',
            description:
                'Attach an NFC tag to the physical piece. This tag is cryptographically linked to the digital certificate, allowing easy verification.',
        },
        {
            icon: <ServerCogIcon className="h-8 w-8 text-primary" />,
            title: 'Step 3: Verify and Share',
            description:
                'Buyers, collectors, and galleries can easily verify authenticity by scanning the NFC tag, confirming ownership and provenance.',
        },
    ];

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 cosmic-grid opacity-20"></div>

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">How It Works</h2>
                    <p className="text-muted-foreground text-lg">
                        From registering your artwork to verifying authenticity, our platform simplifies the process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="border border-border bg-card hover:border-border/60 transition-all duration-300">
                            <CardContent className="p-8 text-center space-y-6">
                                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-medium text-foreground">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                        With our streamlined platform, artists and collectors can manage artwork authenticity and provenance in a secure and efficient way
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Our platform offers a transparent and secure system, ensuring all transactions are recorded immutably on the blockchain and can be easily verified</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
