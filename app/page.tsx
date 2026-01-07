'use client'

import Image from 'next/image'
import { ConstructionAnimation } from '@/components/ConstructionAnimation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1XcZcjusuFGWNHpQWzybb9RXcfO4-qEeLQfxfbzhrBO4/edit'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Animation */}
      <section className="relative">
        <ConstructionAnimation />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 drop-shadow-lg">
              Building Dreams
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              Modern Construction Solutions for Tomorrow
            </p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white shadow-elevation-4 font-heading">
                Register Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary">
            Why Choose Jebin Constructions?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Leading the industry with innovative building solutions and modern construction techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card hover elevation={2} className="text-center animate-slide-up">
            <div className="mb-4 flex justify-center">
              <Image
                src="/feature-modern.jpg"
                alt="Modern Architecture"
                width={200}
                height={200}
                className="object-cover rounded-lg h-48 w-full"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary">
              Modern Architecture
            </h3>
            <p className="text-text-secondary">
              Cutting-edge designs that blend functionality with aesthetic appeal.
            </p>
          </Card>

          <Card hover elevation={2} className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-4 flex justify-center">
              <Image
                src="/feature-fast.png"
                alt="Efficient Project Cycle"
                width={200}
                height={200}
                className="object-cover rounded-lg h-48 w-full"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary">
              Efficient Project Cycle
            </h3>
            <p className="text-text-secondary">
              Efficient project management ensuring timely completion.
            </p>
          </Card>

          <Card hover elevation={2} className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 flex justify-center">
              <Image
                src="/feature-quality.png"
                alt="Quality Assured"
                width={200}
                height={200}
                className="object-cover rounded-lg h-48 w-full"
              />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-text-primary">
              Quality Assured
            </h3>
            <p className="text-text-secondary">
              Premium materials and expert craftsmanship in every project.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-bg-secondary rounded-lg p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary">
            Ready to Start Your Project?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Jebin Constructions for their building needs.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Register Your Project
            </Button>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary bg-opacity-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-text-secondary">Happy Clients</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-text-secondary">Testings</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
