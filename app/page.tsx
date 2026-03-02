'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ConstructionAnimation } from '@/components/ConstructionAnimation'
import { Button } from '@/components/ui/Button'

const GOOGLE_FORM_URL = 'https://forms.gle/h2XQahLxJzywDXf47'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4M5 21V11" /></svg>
    ),
    title: 'Modern Architecture',
    desc: 'Cutting-edge designs that blend functionality with aesthetic appeal, tailored for every client.',
    img: '/feature-modern.jpg',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    title: 'Efficient Project Cycle',
    desc: 'Streamlined project management ensuring on-time delivery without compromising quality.',
    img: '/feature-fast.png',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Quality Assured',
    desc: 'Premium materials and expert craftsmanship certified to the highest industry standards.',
    img: '/feature-quality.png',
  },
]

const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Happy Clients' },
  { value: '10+', label: 'Quality Tests' },
]

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero Animation ── */}
      <section className="relative">
        <ConstructionAnimation />
      </section>

      {/* ── Register CTA bar ── */}
      <section className="w-full bg-gradient-to-b from-[#1a2e4a] to-[#0f172a] py-10 flex flex-col items-center gap-4">
        <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">Start your project today</p>
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          <button className="px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-heading tracking-wide animate-pulse">
            Register Now ↗
          </button>
        </a>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-2 px-2">
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-0.5 font-heading">{s.value}</div>
                <div className="text-xs text-white/70 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Built on Excellence
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Leading the industry with innovative building solutions and modern construction techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-bg-secondary rounded-2xl overflow-hidden shadow-elevation-2 group hover:-translate-y-1 transition-all duration-300 card-accent"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="icon-badge mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-text-primary">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Serving All of Tamilnadu</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">Ready to Start Your Project?</h2>
              <p className="text-white/60 max-w-xl">
                Join hundreds of satisfied clients who trust Jebin Constructions for their building needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 font-heading whitespace-nowrap">
                  Register Your Project ↗
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* Founder */}
          <div className="text-center group">
            <div className="relative w-44 h-44 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-dark opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-110" />
              <Image
                src="/justin-c.png"
                alt="Justin C - Founder"
                fill
                className="object-cover rounded-full border-4 border-primary shadow-xl relative z-10"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-primary">Justin C</h3>
            <p className="text-primary font-semibold mt-1">Founder</p>
            <p className="text-text-secondary text-sm mt-1">Jebin Constructions</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          {/* CEO */}
          <div className="text-center group">
            <div className="relative w-44 h-44 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-dark opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-110" />
              <Image
                src="/jebin-raj.jpg"
                alt="Jebin Raj J - CEO"
                fill
                className="object-cover rounded-full border-4 border-primary shadow-xl relative z-10"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-text-primary">Jebin Raj J</h3>
            <p className="text-primary font-semibold mt-1">Chief Executive Officer</p>
            <p className="text-text-secondary text-sm mt-1">Jebin Constructions</p>
          </div>
        </div>
      </section>

    </div>
  )
}
