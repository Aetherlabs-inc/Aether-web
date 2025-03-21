'use client';

import Image from 'next/image';
import { CloudUpload, ServerCogIcon } from 'lucide-react';
import { LockClosedIcon } from '@radix-ui/react-icons';
import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    return (
        <div className="relative isolate overflow-hidden bg-card px-4 sm:px-6 py-16 sm:py-24 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:[mask-image:radial-gradient(64rem_64rem_at_top,black,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                {/* Main Text Section */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:pr-4"
                    >
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Art Authentication</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How It Works</h1>
                            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300">
                                From registering your artwork to verifying authenticity, our platform simplifies the process.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="-ml-4 sm:-ml-12 -mt-12 p-4 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
                >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-400/10">
                        <Image
                            alt="App Screenshot"
                            src="/dashboard.png"
                            className="w-full h-auto rounded-xl bg-gray-900"
                            width={2432}
                            height={1442}
                            priority
                        />
                    </div>
                </motion.div>

                {/* Detailed Process Section */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:pr-4"
                    >
                        <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                            <p className="text-gray-600 dark:text-gray-300">
                                Our platform makes it easy for artists, collectors, and galleries to secure the authenticity of artworks.
                            </p>
                            <ul role="list" className="mt-8 space-y-8">
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex gap-x-3 group"
                                >
                                    <CloudUpload className="mt-1 h-5 w-5 flex-none text-indigo-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-600 dark:text-gray-300">
                                        <strong className="font-semibold text-gray-900 dark:text-white">Step 1: Register Your Artwork</strong> — Upload your artwork to our platform. Each piece will be assigned a digital certificate of authenticity stored securely on the blockchain.
                                    </span>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex gap-x-3 group"
                                >
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-600 dark:text-gray-300">
                                        <strong className="font-semibold text-gray-900 dark:text-white">Step 2: Attach NFC Tag</strong> — Attach an NFC tag to the physical piece. This tag is cryptographically linked to the digital certificate, allowing easy verification.
                                    </span>
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex gap-x-3 group"
                                >
                                    <ServerCogIcon className="mt-1 h-5 w-5 flex-none text-indigo-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-600 dark:text-gray-300">
                                        <strong className="font-semibold text-gray-900 dark:text-white">Step 3: Verify and Share</strong> — Buyers, collectors, and galleries can easily verify authenticity by scanning the NFC tag, confirming ownership and provenance.
                                    </span>
                                </motion.li>
                            </ul>
                            <p className="mt-8 text-gray-600 dark:text-gray-300">
                                With our streamlined platform, artists and collectors can manage artwork authenticity and provenance in a secure and efficient way.
                            </p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h2 className="mt-16 text-2xl font-bold tracking-tight">Why Choose Our Platform?</h2>
                                <p className="mt-6 text-gray-600 dark:text-gray-300">
                                    Our platform offers a transparent and secure system, ensuring all transactions are recorded immutably on the blockchain and can be easily verified.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
