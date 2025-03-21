import React from 'react';
import { motion } from 'framer-motion';
import { Image, FileCheck, Clock, Plus, BarChart3, Activity, Users, FileText, Search, Bell } from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    // Mock data - replace with actual data from your backend
    const stats = {
        totalArtworks: 1250,
        issuedCertificates: 980,
        inProcessCertificates: 270,
        totalUsers: 850,
        verificationRate: 98.5,
        monthlyGrowth: 12
    };

    const recentActivity = [
        { type: 'artwork', title: 'The Starry Night', action: 'Added', time: '2 hours ago' },
        { type: 'certificate', title: 'Mona Lisa', action: 'Issued', time: '4 hours ago' },
        { type: 'verification', title: 'The Persistence of Memory', action: 'Verified', time: '5 hours ago' },
        { type: 'user', title: 'New Artist Registration', action: 'Completed', time: '6 hours ago' },
        { type: 'certificate', title: 'The Scream', action: 'Issued', time: '7 hours ago' },
    ];

    // Chart data for certificate issuance trend
    const certificateTrendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Certificates Issued',
                data: [120, 150, 180, 140, 160, 156],
                borderColor: 'rgb(0, 0, 0)',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                tension: 0.4
            }
        ]
    };

    // Chart data for artwork categories
    const categoryData = {
        labels: ['Paintings', 'Sculptures', 'Digital Art', 'Photography', 'Other'],
        datasets: [
            {
                data: [45, 20, 15, 10, 10],
                backgroundColor: [
                    'rgb(0, 0, 0)',
                    'rgb(40, 40, 40)',
                    'rgb(80, 80, 80)',
                    'rgb(120, 120, 120)',
                    'rgb(160, 160, 160)'
                ]
            }
        ]
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen p-6 bg-background">
            <div className="mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground">
                        Dashboard Overview
                    </h1>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-9 w-[200px]" />
                        </div>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Total Artworks Card */}
                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            Total Artworks
                                        </p>
                                        <p className="text-2xl font-bold text-foreground mt-2">
                                            {stats.totalArtworks}
                                        </p>
                                    </div>
                                    <div className="bg-black rounded-full p-3">
                                        <Image className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Issued Certificates Card */}
                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            Issued Certificates
                                        </p>
                                        <p className="text-2xl font-bold text-foreground mt-2">
                                            {stats.issuedCertificates}
                                        </p>
                                    </div>
                                    <div className="bg-black rounded-full p-3">
                                        <FileCheck className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* In Process Certificates Card */}
                    <motion.div variants={item}>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            Certificates in Process
                                        </p>
                                        <p className="text-2xl font-bold text-foreground mt-2">
                                            {stats.inProcessCertificates}
                                        </p>
                                    </div>
                                    <div className="bg-black rounded-full p-3">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Quick Actions and Recent Activity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Quick Actions */}
                    <motion.div variants={item}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Plus className="w-5 h-5 mr-2" />
                                    Quick Actions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" className="w-full justify-start">
                                        <Image className="w-5 h-5 mr-2" />
                                        Add Artwork
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <FileCheck className="w-5 h-5 mr-2" />
                                        Issue Certificate
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Users className="w-5 h-5 mr-2" />
                                        Add Artist
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <FileText className="w-5 h-5 mr-2" />
                                        View Reports
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div variants={item}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Activity className="w-5 h-5 mr-2" />
                                    Recent Activity
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivity.map((activity, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 rounded-full mr-3 bg-black" />
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">
                                                        {activity.title}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {activity.action}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">
                                                {activity.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>

            {/* Analytics Section */}
            <motion.div variants={item} className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Analytics Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground">Monthly Certificates</h3>
                                    <p className="text-2xl font-bold text-foreground mt-2">156</p>
                                    <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground">Verification Rate</h3>
                                    <p className="text-2xl font-bold text-foreground mt-2">98.5%</p>
                                    <p className="text-xs text-muted-foreground mt-1">+2.3% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
                                    <p className="text-2xl font-bold text-foreground mt-2">1,234</p>
                                    <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Certificate Issuance Trend */}
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Certificate Issuance Trend</h3>
                                    <div className="h-[300px]">
                                        <Line data={certificateTrendData} options={{ maintainAspectRatio: false }} />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Artwork Categories Distribution */}
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Artwork Categories</h3>
                                    <div className="h-[300px]">
                                        <Doughnut data={categoryData} options={{ maintainAspectRatio: false }} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Dashboard;
