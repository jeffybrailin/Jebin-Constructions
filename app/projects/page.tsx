'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                    Our Projects
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    Showcasing our excellence in construction through completed works and ongoing developments.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <Card hover elevation={2} className="p-0 overflow-hidden animate-slide-up group">
                    <div className="relative h-[500px] overflow-hidden bg-gray-100">
                        <Image
                            src="/jc-verkilambi-residence-full.jpg"
                            alt="JC Verkilambi Residence"
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary">
                            JC Verkilambi Residence
                        </h3>
                        <p className="text-sm font-medium text-primary mb-3">
                            📍 Verkilambi, Kanniyakumari District
                        </p>
                        <p className="text-text-secondary mb-4 text-sm">
                            A modern residential building constructed with quality materials, strong RCC structure, and professional site supervision to ensure durability and client satisfaction.
                        </p>
                        <div className="flex gap-2 text-sm text-text-secondary">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Residential</span>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>
                        </div>
                    </div>
                </Card>

                {/* Placeholder cards for now */}
                <Card hover elevation={2} className="p-0 overflow-hidden animate-slide-up group" style={{ animationDelay: '0.1s' }}>
                    <div className="relative h-[500px] overflow-hidden bg-gray-100">
                        <Image
                            src="/jc-mekkamandapam-residence.jpg"
                            alt="JC Mekkamandapam Residence"
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary">
                            JC Mekkamandapam Residence
                        </h3>
                        <p className="text-sm font-medium text-primary mb-3">
                            📍 Mekkamandapam, Kanniyakumari District
                        </p>
                        <p className="text-text-secondary mb-4 text-sm">
                            A residential project executed with strong RCC structure, quality finishes, and professional site supervision to ensure safety and durability.
                        </p>
                        <div className="flex gap-2 text-sm text-text-secondary">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Residential</span>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Completed</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="text-center animate-fade-in">
                <p className="text-text-secondary mb-6">
                    Have a project in mind? Let's build it together.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                        Contact Us
                    </Button>
                </Link>
            </div>
        </div>
    )
}
