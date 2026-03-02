'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const GOOGLE_FORM_URL = 'https://forms.gle/h2XQahLxJzywDXf47'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      {/* Orange top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand col */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Jebin Constructions Logo" width={36} height={36} className="rounded-full" />
                <span className="font-heading font-bold text-white text-lg">Jebin Constructions</span>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Building excellence since 2022. Modern construction solutions crafted with quality and care.
              </p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-all duration-200 font-heading">
                  Register Now ↗
                </button>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-primary mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {['/', '/about', '/projects', '/services', '/contact', '/terms'].map((href) => {
                  const labels: Record<string, string> = {
                    '/': 'Home', '/about': 'About', '/projects': 'Projects',
                    '/services': 'Services', '/contact': 'Contact', '/terms': 'Terms & Conditions',
                  }
                  return (
                    <li key={href}>
                      <Link href={href} className="text-white/50 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group">
                        <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">→</span>
                        {labels[href]}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-primary mb-5 text-sm tracking-widest uppercase">Services</h4>
              <ul className="space-y-2.5 text-sm">
                {['Commercial Construction', 'Residential Building', 'Renovation & Remodeling', 'Infrastructure Projects', 'Material Testing'].map((s) => (
                  <li key={s} className="text-white/50 text-sm">{s}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-primary mb-5 text-sm tracking-widest uppercase">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.42-1.42a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="text-white/50">
                    <p>+91 94446 40146</p>
                    <p>+91 91592 92954</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <p className="text-white/50 text-xs break-all">jebinconstructions@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-primary flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-white/50">Nagercoil, Kanyakumari Dist.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>© 2026 Jebin Constructions. All rights reserved.</p>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
