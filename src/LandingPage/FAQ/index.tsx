import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "What happens if the NFC tag is damaged or removed?",
            answer: "Your artwork's certificate remains permanently on the blockchain regardless of the physical tag. We can send replacement tags that link to the same certificate. The blockchain record includes tag replacement history for complete transparency."
        },
        {
            question: "Which blockchain do you use and why?",
            answer: "We use Polygon (a layer-2 Ethereum solution) for its security, low costs, and environmental sustainability. Each certificate costs pennies to mint, and transactions are 99% more energy-efficient than traditional Ethereum."
        },
        {
            question: "Do buyers need an app to verify authenticity?",
            answer: "No! Any smartphone with NFC capability (most phones made after 2018) can tap the tag and instantly view the certificate through their web browser. No downloads, no accounts, no friction."
        },
        {
            question: "Can I transfer ownership when I sell my artwork?",
            answer: "Absolutely. Ownership transfers are built into the system. You can transfer via email invitation, and the new owner gets full access while the complete provenance history remains visible on the blockchain."
        },
        {
            question: "Is my artwork information private?",
            answer: "You control what's public. Artist name, title, and authenticity are visible to anyone who scans the tag. Private details like purchase price, owner information, and high-res images remain encrypted and visible only to authorized parties."
        },
        {
            question: "What file formats do you accept?",
            answer: "We accept JPG, PNG, TIFF, and HEIC files up to 50MB each. For 3D art or sculptures, you can upload multiple angles. We automatically optimize images while preserving quality for verification purposes."
        },
        {
            question: "When will Aether launch?",
            answer: "We're planning to launch in February 2025. Waitlist members will get early access 2 weeks before public launch, plus exclusive founding member pricing."
        },
        {
            question: "What if I have more questions?",
            answer: "Email us at hello@aether.com. We respond to every message within 24 hours and would love to hear from you!"
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-12 bg-muted/30">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border">
                            <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;