'use client'
import React from 'react';
import { Home, List, Activity, Grid, Users, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import { Separator } from '@radix-ui/react-dropdown-menu';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const AetherPlatformUI = () => {
    const certificates = [
        { title: "The Starry Night", status: "Authenticated", time: "5 mins ago" },
        { title: "The Persistence of Memory", status: "Pending Verification", time: "2 hours ago" },
        { title: "Guernica", status: "Flagged for Review", time: "1 day ago" },
    ];

    // Define dynamic styles based on status
    const statusStyles: any = {
        "Authenticated": "bg-[#248232] text-french-gray",
        "Pending Verification": "bg-[#B8860B] text-french-gray",
        "Flagged for Review": "bg-[#990000] text-french-gray",
    };

    // CertificateCard component
    const CertificateCard = ({ title, status, time }: any) => (
        <div className="flex items-center justify-between bg-raisin-black rounded-lg p-4 shadow-md hover:bg-gunmetal transition-colors">
            <div className="flex items-center space-x-3">
                <List className="w-5 h-5 text-neon-blue" />
                <div>
                    <h3 className="text-base font-semibold text-french-gray">{title}</h3>
                    <p className="text-sm text-paynes-gray">Deploys from GitHub · {time}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
                    {status}
                </span>
                <button className="text-french-gray bg-paynes-gray/10 hover:bg-paynes-gray/20 rounded-lg px-3 py-1 text-sm">
                    Preview
                </button>
                <svg className="w-5 h-5 text-french-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );

    // Data for Doughnut Chart (Certificate Status Breakdown)
    const certificateData = {
        labels: ['Authenticated', 'Pending', 'Flagged'],
        datasets: [
            {
                data: [80, 30, 10],
                backgroundColor: ['#606af2', '#646c78', '#192231'],
                hoverBackgroundColor: ['#606af2', '#646c78', '#192231']

            }

        ],
        circumference: 20,
    };

    // Data for Line Chart (Recent Verifications)
    const verificationData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Verifications',
                data: [5, 15, 8, 20, 12, 18, 9],
                borderColor: '#606af2',
                backgroundColor: 'rgba(96, 106, 242, 0.2)',
                fill: true,
            }
        ]
    };

    // Data for Bar Chart (Flagged Items)
    const flaggedData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Flagged Items',
                data: [2, 4, 1, 5, 2, 3],
                backgroundColor: '#606af2',
            }
        ]
    };

    return (
        <div className="flex h-screen bg-raisin-black text-french-gray">
            {/* Sidebar Navigation */}
            <div className="bg-gunmetal p-6 space-y-6 w-64 shadow-lg">
                <nav className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-paynes-gray">Navigation</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <Home className="w-5 h-5 text-neon-blue" />
                                    <span>Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <List className="w-5 h-5 text-neon-blue" />
                                    <span>Certificates</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <Activity className="w-5 h-5 text-neon-blue" />
                                    <span>Activity</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <Grid className="w-5 h-5 text-neon-blue" />
                                    <span>Collections</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <Users className="w-5 h-5 text-neon-blue" />
                                    <span>Usage</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-paynes-gray">
                                    <Settings className="w-5 h-5 text-neon-blue" />
                                    <span>Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-french-gray">All Certificates</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search certificates..."
                                className="bg-gunmetal rounded-lg px-4 py-2 pr-10 text-french-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg
                                    className="w-5 h-5 text-paynes-gray"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative cursor-pointer">
                            <Avatar>
                                <Image src="/path/to/profile-image.jpg" alt="Profile" layout="fill" className="rounded-full" />
                            </Avatar>
                        </div>
                    </div>
                </div>

                {/* Dashboard Widgets with Charts */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Doughnut Chart for Certificate Status */}
                    <div className="bg-gunmetal p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold text-french-gray mb-4">Certificate Status</h2>
                        <Doughnut data={certificateData} className="h-[200px]" />
                    </div>
                    {/* Line Chart for Recent Verifications */}
                    <div className="bg-gunmetal p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold text-french-gray mb-4">Recent Verifications</h2>
                        <Line data={verificationData} />
                    </div>
                    {/* Bar Chart for Flagged Items */}
                    <div className="bg-gunmetal p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold text-french-gray mb-4">Flagged Items</h2>
                        <Bar data={flaggedData} />
                    </div>
                </div>

                <div className="space-y-4">
                    {certificates.map((certificate, index) => (
                        <div key={index}>
                            <CertificateCard
                                title={certificate.title}
                                status={certificate.status}
                                time={certificate.time}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="bg-gunmetal w-64 p-6 space-y-6 shadow-lg">
                <div className="space-y-4">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-paynes-gray">Notifications</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-paynes-gray rounded-lg">
                            <AlertCircle className="text-[#FF0800]" />
                            <span className="text-french-gray">New flag in Guernica</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-paynes-gray rounded-lg">
                            <CheckCircle className="text-[#03C03C]" />
                            <span className="text-french-gray">New certificate authenticated</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium uppercase tracking-wider text-paynes-gray">Quick Actions</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-paynes-gray">
                                <Activity className="w-5 h-5 text-neon-blue" />
                                <span className="text-french-gray">View Activity Logs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-paynes-gray">
                                <Settings className="w-5 h-5 text-neon-blue" />
                                <span className="text-french-gray">Account Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AetherPlatformUI;
