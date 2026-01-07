'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_WiuMOuI5fPmxLBpn3NwHBpOL9awJd5RuP9CwMUJJh08O_w/viewform?usp=dialog'

const services = [
  {
    icon: '🏢',
    title: 'Commercial Construction',
    description: 'Modern office buildings, retail spaces, and commercial complexes designed for functionality and aesthetics.',
  },
  {
    icon: '🏠',
    title: 'Residential Construction',
    description: 'Custom homes and residential buildings built with precision and attention to detail.',
  },
  {
    icon: '🏗️',
    title: 'Industrial Construction',
    description: 'Robust industrial facilities and warehouses designed for efficiency and durability.',
  },
  {
    icon: '🔧',
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with modern designs and updated infrastructure.',
  },
  {
    icon: '🌉',
    title: 'Infrastructure Projects',
    description: 'Bridges, roads, and public infrastructure built to last for generations.',
  },
  {
    icon: '🏛️',
    title: 'Institutional Buildings',
    description: 'Schools, hospitals, and government buildings constructed with care and precision.',
  },
  {
    icon: '🧪',
    title: 'Material Testing',
    description: 'Comprehensive on-site material verification including concrete, cement, and steel quality checks.',
    href: '/services/testings'
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
          Our Services
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Comprehensive construction solutions for every need
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const CardContent = () => (
            <>
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-text-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-6">{service.description}</p>
              {/* @ts-ignore */}
              {service.href && (
                <div className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details <span>→</span>
                </div>
              )}
            </>
          )

          /* @ts-ignore */
          if (service.href) {
            return (
              <a key={service.title} href={service.href} className="block group">
                <Card
                  hover
                  elevation={2}
                  className="p-6 h-full animate-slide-up transition-transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent />
                </Card>
              </a>
            )
          }

          return (
            <Card
              key={service.title}
              hover
              elevation={2}
              className="p-6 h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent />
            </Card>
          )
        })}
      </div>

      <section className="bg-bg-secondary rounded-lg p-12 text-center animate-fade-in">
        <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary">
          Ready to Start Your Project?
        </h2>
        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your construction needs and get a free quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Register Your Project
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
