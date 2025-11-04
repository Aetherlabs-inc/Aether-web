import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXContent } from '@/lib/mdx';
import NavBar from '@/src/NavBar';
import Footer from '@/src/Footer';

export const metadata = {
    title: 'Privacy Policy | AetherLabs',
    description: 'AetherLabs Privacy Policy',
};

export default async function PrivacyPage() {
    const { content } = getMDXContent('privacy');

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-16">
                <article className="max-w-none [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:mt-8 [&_h1]:text-foreground [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-foreground [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-foreground [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-7 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_li]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
                    <MDXRemote source={content} />
                </article>
            </main>
            <Footer />
        </div>
    );
}
