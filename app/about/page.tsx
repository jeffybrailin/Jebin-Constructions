'use client'

export default function About() {
  const values = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
      title: 'Excellence',
      desc: 'Striving for perfection in every detail of our construction work.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      title: 'Integrity',
      desc: 'Honest, transparent communication with all clients and stakeholders.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      title: 'Sustainability',
      desc: 'Committed to eco-friendly construction practices for a better future.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: 'Innovation',
      desc: 'Embracing new technologies and modern building methods every day.',
    },
  ]

  return (
    <div className="w-full">

      {/* ── Page Hero ── */}
      <section className="section-hero text-center">
        <div className="container mx-auto relative z-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            About Jebin Constructions
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building excellence since 2022 — quality, integrity, and innovation in every project.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-bg-secondary rounded-2xl p-8 card-accent shadow-elevation-2 hover:-translate-y-1 transition-transform duration-300">
            <div className="icon-badge mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-3 text-text-primary">Our Mission</h3>
            <p className="text-text-secondary leading-relaxed">
              To deliver exceptional construction services that exceed client expectations while maintaining
              the highest standards of quality, safety, and innovation in every project we undertake.
            </p>
          </div>

          <div className="bg-bg-secondary rounded-2xl p-8 card-accent shadow-elevation-2 hover:-translate-y-1 transition-transform duration-300">
            <div className="icon-badge mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-3 text-text-primary">Our Vision</h3>
            <p className="text-text-secondary leading-relaxed">
              To be the leading construction company recognized for transforming architectural visions
              into reality through modern building techniques and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 text-center">
                <div className="icon-badge mx-auto mb-4">{v.icon}</div>
                <h4 className="font-heading font-bold text-white mb-2">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">Our Story</h2>
        </div>
        <div className="border-l-4 border-primary pl-8 space-y-5">
          <p className="text-text-secondary leading-relaxed text-lg">
            Founded in <span className="text-primary font-semibold">2022</span>, Jebin Constructions began as a small local contractor with a big vision.
            Over the years, we&apos;ve grown into a trusted name in the construction industry, completing
            projects ranging from residential buildings to commercial complexes.
          </p>
          <p className="text-text-secondary leading-relaxed text-lg">
            Our success is built on a foundation of quality craftsmanship, innovative solutions, and
            an unwavering commitment to client satisfaction. We take pride in every structure we build
            and every relationship we forge.
          </p>
        </div>
      </section>

    </div>
  )
}
