import { LockClosedIcon } from "@radix-ui/react-icons";
import { ArrowUp01Icon, CloudUploadIcon, FingerprintIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        name: "Secure Artwork Upload",
        description:
            "Upload your artwork and generate a tamper-proof digital certificate of authenticity, securely stored on the blockchain.",
        icon: CloudUploadIcon,
    },
    {
        name: "NFC-Powered Authentication",
        description:
            "Each artwork is paired with a unique NFC tag, allowing for easy, instant verification of authenticity anytime, anywhere.",
        icon: LockClosedIcon,
    },
    {
        name: "Instant Verification",
        description:
            "Quickly verify the authenticity of artworks using our advanced NFC system, ensuring secure and fast verification.",
        icon: ArrowUp01Icon,
    },
    {
        name: "Advanced Blockchain Security",
        description:
            "Our blockchain-based security ensures all transactions and records of authenticity are immutable and verifiable.",
        icon: FingerprintIcon,
    },
];

export default function Features() {
    return (
        <section className="w-full py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">Everything Your Art World Needs</h2>
                    <p className="text-muted-foreground text-lg">
                        Our platform offers an easy and secure solution for artists, galleries, and collectors to authenticate and manage artwork.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.name} className="border border-border bg-card hover:border-border/60 transition-all duration-300">
                            <CardContent className="p-6 space-y-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-medium text-foreground">{feature.name}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
