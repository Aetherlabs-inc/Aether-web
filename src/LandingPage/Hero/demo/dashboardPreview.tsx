'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Import the real Dashboard only on the client (Chart.js safe)
const Dashboard = dynamic(() => import('@/src/dashboard/index'), { ssr: false });

type DashboardPreviewProps = {
    scale?: number;        // tweak if you change hero height
    translateX?: number;   // tweak to center the preview
    translateY?: number;
    className?: string;
};

export default function DashboardPreview({
    scale = 0.95,
    translateX = 0,
    translateY = 0,
    className = '',
}: DashboardPreviewProps) {
    return (
        <div className={`relative h-[560px] w-full overflow-hidden rounded-lg ${className}`}>
            {/* disable interactions inside the preview */}
            <div
                className="pointer-events-none select-none"
                style={{
                    transformOrigin: 'top left',
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                }}
            >
                {/* Your existing Dashboard component */}
                <Dashboard />
            </div>

            {/* fade at bottom so it feels embedded */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
        </div>
    );
}
