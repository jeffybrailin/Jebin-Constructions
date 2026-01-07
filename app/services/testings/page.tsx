'use client'

import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function MaterialTesting() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="max-w-4xl mx-auto animate-fade-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                        Material Testing (Site Level)
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed mb-12">
                        Ensuring quality through rigorous on-site verification
                    </p>
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-elevation-3 mb-12 animate-fade-in group">
                        <Image
                            src="/material-testing.png"
                            alt="Material Testing On-Site"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Concrete */}
                    <Card elevation={2} className="p-8 animate-slide-up">
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                            <span>🧱</span> Concrete (On-Site)
                        </h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Slump Test</strong> – To check workability before pouring</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Concrete Cube Casting</strong> – For strength checking (7 & 28 days)</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Visual Check of Concrete</strong> – Segregation, bleeding, consistency</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Cement */}
                    <Card elevation={2} className="p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                            <span>🧪</span> Cement (Basic Checks)
                        </h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Date & Grade Verification</strong></span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Hand Feel Test</strong> – Smoothness and lumps</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Colour Check</strong> – Uniform grey colour</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Float Test</strong> – Cement should sink, not float</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Aggregates */}
                    <Card elevation={2} className="p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                            <span>🪨</span> Aggregates (On-Site)
                        </h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Sieve Check (Manual)</strong> – Size and cleanliness</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Visual Inspection</strong> – Dust, clay, organic matter</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Water Absorption Check</strong> – Simple soaking method</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Steel */}
                    <Card elevation={2} className="p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                            <span>🔩</span> Steel (Reinforcement)
                        </h3>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Diameter & Length Check</strong></span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Brand & Grade Verification</strong> (Fe 500 / Fe 500D)</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Bend Test (Manual)</strong> – No cracks after bending</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Rust Inspection</strong></span>
                            </li>
                        </ul>
                    </Card>
                </div>

                {/* Soil */}
                <Card elevation={2} className="p-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
                        <span>🌍</span> Soil (Foundation Level)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Field Identification Test</strong> – Clay / sand / silt</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Moisture Check by Hand</strong></span>
                            </li>
                        </ul>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Simple Load Test (Plate/Field check)</strong></span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Visual Bearing Observation during Excavation</strong></span>
                            </li>
                        </ul>
                    </div>
                </Card>

                <div className="text-center animate-fade-in">
                    <Link href="/services">
                        <Button variant="outline" size="lg">
                            ← Back to Services
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
