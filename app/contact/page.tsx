'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform' // Replace with your Google Form URL

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you might want to send this to an email service
    // For now, we'll just show success and redirect to Google Form
    setSubmitted(true)
    setTimeout(() => {
      window.open(GOOGLE_FORM_URL, '_blank')
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card elevation={3} className="max-w-2xl mx-auto p-12 text-center animate-fade-in">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary">
            Thank You!
          </h2>
          <p className="text-text-secondary mb-8">
            Your message has been received. Redirecting to registration form...
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-2xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
            Contact Us
          </h1>
          <p className="text-lg text-text-secondary">
            Get in touch with our team for inquiries and project consultations
          </p>
        </div>

        <Card elevation={3} className="p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <div>
              <label className="block text-sm font-medium mb-1 text-text-primary">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-bg-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out"
                rows={6}
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card elevation={2} className="text-center p-6">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold mb-2 text-text-primary">Email</h3>
            <p className="text-text-secondary text-sm">info@jebinconstructions.com</p>
          </Card>
          <Card elevation={2} className="text-center p-6">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold mb-2 text-text-primary">Phone</h3>
            <p className="text-text-secondary text-sm">+1 (555) 123-4567</p>
          </Card>
          <Card elevation={2} className="text-center p-6">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold mb-2 text-text-primary">Address</h3>
            <p className="text-text-secondary text-sm">123 Construction Ave, City</p>
          </Card>
        </div>

        <Card elevation={2} className="p-8 text-center animate-fade-in">
          <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary">
            Ready to Start Your Project?
          </h3>
          <p className="text-text-secondary mb-6">
            Register now to get started with your construction project
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Register Now
            </Button>
          </a>
        </Card>
      </section>
    </div>
  )
}
