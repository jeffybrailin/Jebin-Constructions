'use client'

import { Card } from '@/components/ui/Card'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
            About Jebin Constructions
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Building excellence since 2022
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card elevation={3} className="p-8 animate-slide-up">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary">
              Our Mission
            </h3>
            <p className="text-text-secondary leading-relaxed">
              To deliver exceptional construction services that exceed client expectations while maintaining
              the highest standards of quality, safety, and innovation in every project we undertake.
            </p>
          </Card>

          <Card elevation={3} className="p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary">
              Our Vision
            </h3>
            <p className="text-text-secondary leading-relaxed">
              To be the leading construction company recognized for transforming architectural visions
              into reality through modern building techniques and sustainable practices.
            </p>
          </Card>
        </div>

        <Card elevation={2} className="p-8 mb-12 animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-text-primary">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h4 className="font-semibold mb-2 text-text-primary">Excellence</h4>
                <p className="text-text-secondary text-sm">
                  Striving for perfection in every detail of our work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h4 className="font-semibold mb-2 text-text-primary">Integrity</h4>
                <p className="text-text-secondary text-sm">
                  Honest, transparent communication with all stakeholders.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌱</div>
              <div>
                <h4 className="font-semibold mb-2 text-text-primary">Sustainability</h4>
                <p className="text-text-secondary text-sm">
                  Committed to eco-friendly construction practices.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-semibold mb-2 text-text-primary">Innovation</h4>
                <p className="text-text-secondary text-sm">
                  Embracing new technologies and modern building methods.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card elevation={2} className="p-8 animate-slide-up">
          <h3 className="text-2xl font-heading font-semibold mb-6 text-text-primary">
            Our Story
          </h3>
          <p className="text-text-secondary leading-relaxed mb-4">
            Founded in 2022, Jebin Constructions began as a small local contractor with a big vision.
            Over the years, we&apos;ve grown into a trusted name in the construction industry, completing
            hundreds of projects ranging from residential buildings to commercial complexes.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Our success is built on a foundation of quality craftsmanship, innovative solutions, and
            unwavering commitment to client satisfaction. We take pride in every structure we build
            and every relationship we forge.
          </p>
        </Card>
      </section>
    </div>
  )
}
