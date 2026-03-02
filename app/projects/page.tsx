'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        img: '/jc-verkilambi-residence-full.jpg',
        title: 'JC Verkilambi Residence',
        location: 'Verkilambi, Kanniyakumari District',
        desc: 'A modern residential building constructed with quality materials, strong RCC structure, and professional site supervision.',
        type: 'Residential',
        status: 'Completed',
    },
    {
        img: '/jc-mekkamandapam-residence.jpg',
        title: 'JC Mekkamandapam Residence',
        location: 'Mekkamandapam, Kanniyakumari District',
        desc: 'A residential project executed with strong RCC structure, quality finishes, and professional site supervision.',
        type: 'Residential',
        status: 'Completed',
    },
    {
        img: '/kanyakumari-site.jpg',
        title: 'Ongoing Site Plan',
        location: 'Kanyakumari',
        desc: 'Upcoming residential project in a prime location, currently in active development.',
        type: 'Residential',
        status: 'Ongoing',
    },
    {
        img: '/jc-kanyakumari-completed.jpg',
        title: 'Kanyakumari Residence',
        location: 'Kanyakumari',
        desc: 'A beautifully completed residential project showcasing modern lighting and architectural excellence.',
        type: 'Residential',
        status: 'Completed',
    },
]

const statusStyle: Record<string, string> = {
    Completed: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    Ongoing: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
}

export default function Projects() {
    return (
        <div className="w-full">

            {/* ── Page Hero ── */}
            <section className="section-hero text-center">
                <div className="container mx-auto relative z-10">
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Our Portfolio</p>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Projects</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Showcasing our excellence in construction — from completed residences to ongoing developments.
                    </p>
                </div>
            </section>

            {/* ── Projects Grid ── */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={p.title}
                            className="bg-bg-secondary rounded-2xl overflow-hidden shadow-elevation-2 group hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Image with hover overlay */}
                            <div className="relative h-60 sm:h-72 overflow-hidden">
                                <Image
                                    src={p.img}
                                    alt={p.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                {/* Overlay title on hover */}
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white/80 text-xs tracking-widest uppercase font-medium">{p.location}</p>
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="text-xl font-heading font-bold text-text-primary leading-snug">{p.title}</h3>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${statusStyle[p.status]}`}>
                                        {p.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-primary text-sm font-medium mb-3">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {p.location}
                                </div>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
                                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                    {p.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-4 text-center">
                <p className="text-white/60 mb-3 max-w-xl mx-auto">Have a project in mind? Let&apos;s build it together.</p>
                <Link href="/contact">
                    <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 font-heading">
                        Contact Us ↗
                    </button>
                </Link>
            </section>

        </div>
    )
}
