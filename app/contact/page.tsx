'use client'

import { useState } from 'react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_WiuMOuI5fPmxLBpn3NwHBpOL9awJd5RuP9CwMUJJh08O_w/viewform?usp=dialog'

const contactInfo = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.42-1.42a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    label: 'Phone',
    lines: ['+91 94446 40146', '+91 91592 92954'],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    label: 'Email',
    lines: ['jebinconstructions@gmail.com'],
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    label: 'Address',
    lines: ['Nagercoil,', 'Kanyakumari District'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { window.open(GOOGLE_FORM_URL, '_blank') }, 1000)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 bg-emerald-500/15 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-emerald-400">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-3">Thank You!</h2>
          <p className="text-text-secondary">Your message has been received. Redirecting to registration form…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">

      {/* ── Page Hero ── */}
      <section className="section-hero text-center">
        <div className="container mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Reach out to our team for project inquiries and consultations.
          </p>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Contact Information</p>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">Let&apos;s Build Together</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ready to start your construction project? Fill out the form or reach us directly at any of the channels below.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-primary/40 transition-colors duration-200">
                  <div className="icon-badge flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm mb-1">{c.label}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-text-secondary text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Register CTA */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white">
              <h3 className="font-heading font-bold text-xl mb-2">Ready to Start?</h3>
              <p className="text-white/80 text-sm mb-4">Register your project now and we&apos;ll get back to you within 24 hours.</p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-50 transition-colors font-heading">
                  Register Now ↗
                </button>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-bg-secondary rounded-2xl p-8 card-accent shadow-elevation-2">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-bg-primary text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-bg-primary text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-bg-primary text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-1.5">Message *</label>
                  <textarea
                    placeholder="Tell us about your project…"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-bg-primary text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] font-heading text-base"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
