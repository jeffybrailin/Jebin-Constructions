'use client'

import Link from 'next/link'

const GOOGLE_FORM_URL = 'https://forms.gle/h2XQahLxJzywDXf47'

const services = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V11" /></svg>,
    title: 'Commercial Construction',
    description: 'Modern office buildings, retail spaces, and commercial complexes designed for functionality and aesthetics.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    title: 'Residential Construction',
    description: 'Custom homes and residential buildings built with precision and attention to every detail.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
    title: 'Industrial Construction',
    description: 'Robust industrial facilities and warehouses designed for maximum efficiency and durability.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with modern designs and updated infrastructure.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
    title: 'Infrastructure Projects',
    description: 'Bridges, roads, and public infrastructure built to last for generations.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    title: 'Institutional Buildings',
    description: 'Schools, hospitals, and government buildings constructed with care and precision.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" /></svg>,
    title: 'Material Testing',
    description: 'Comprehensive on-site material verification including concrete, cement, and steel quality checks.',
    href: '/services/testings',
  },
]

export default function Services() {
  return (
    <div className="w-full">

      {/* ── Page Hero ── */}
      <section className="section-hero text-center">
        <div className="container mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions for every need — from residential homes to large-scale infrastructure.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const inner = (
              <div
                className="bg-bg-secondary rounded-2xl p-7 h-full card-accent shadow-elevation-2 group hover:-translate-y-1 transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="icon-badge mb-5">{s.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-text-primary">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{s.description}</p>
                {s.href && (
                  <div className="mt-5 text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    View Details <span>→</span>
                  </div>
                )}
              </div>
            )

            return s.href ? (
              <Link key={s.title} href={s.href} className="block">
                {inner}
              </Link>
            ) : (
              <div key={s.title}>{inner}</div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/60 max-w-lg">
                Contact us today to discuss your construction needs and get a free consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 font-heading whitespace-nowrap">
                  Register Project ↗
                </button>
              </a>
              <Link href="/contact">
                <button className="px-7 py-3.5 border-2 border-white/30 hover:border-primary text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 font-heading whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
