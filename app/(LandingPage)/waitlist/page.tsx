'use client';

import React, { useState } from 'react';
import { Widget } from '@typeform/embed-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type WaitlistStep = 'survey' | 'form';
type Role = 'Collector' | 'Artist' | 'Gallery' | null;

export default function WaitlistPage() {
    const [step, setStep] = useState<WaitlistStep>('survey');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<Role>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSkipSurvey = () => {
        setStep('form');
    };

    const handleSurveyComplete = () => {
        setStep('form');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !role) {
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: Replace with your actual waitlist API endpoint
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    role,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error('Failed to join waitlist');
            }
        } catch (error) {
            console.error('Error joining waitlist:', error);
            alert('Failed to join waitlist. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 py-16">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">You&apos;re on the list! 🎉</CardTitle>
                        <CardDescription>
                            Thank you for joining our waitlist. We&apos;ll be in touch soon!
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        );
    }

    if (step === 'survey') {
        return (
            <div className="h-screen flex flex-col overflow-hidden">
                <div className="flex-shrink-0 p-4 border-b bg-background">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-semibold">Join the Waitlist</h1>
                        <Button
                            variant="outline"
                            onClick={handleSkipSurvey}
                        >
                            Skip Survey
                        </Button>
                    </div>
                </div>
                <div className="flex-1 relative min-h-0 w-full">
                    <Widget
                        id="IRknsunB"
                        style={{ width: '100%', height: '100%' }}
                        onSubmit={handleSurveyComplete}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-3xl text-center">Join the Waitlist</CardTitle>
                    <CardDescription className="text-center">
                        Be among the first to experience AetherLabs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email Address *
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full"
                            />
                        </div>

                        <div className="space-y-3">
                            <Label>
                                What role are you interested in? *
                            </Label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    {
                                        value: 'Collector',
                                        title: 'Collector',
                                        description: 'I collect art and want to authenticate my pieces',
                                    },
                                    {
                                        value: 'Artist',
                                        title: 'Artist',
                                        description: 'I create art and want to protect my work',
                                    },
                                    {
                                        value: 'Gallery',
                                        title: 'Gallery',
                                        description: 'I run a gallery and need authentication solutions',
                                    },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setRole(option.value as Role)}
                                        className={cn(
                                            "p-4 border-2 rounded-lg text-left transition-all",
                                            role === option.value
                                                ? "border-primary bg-primary/5"
                                                : "border-border hover:border-primary/50"
                                        )}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-1">
                                                <div className="font-medium">{option.title}</div>
                                                <div className="text-sm text-muted-foreground mt-1">
                                                    {option.description}
                                                </div>
                                            </div>
                                            {role === option.value && (
                                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!email || !role || isSubmitting}
                        >
                            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

