'use client'

import React from 'react'
import Link from 'next/link'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform' // Replace with your Google Form URL

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-semibold mb-4 text-text-primary flex items-center gap-2">
              <span className="text-2xl">🏗️</span>
              Jebin Constructions
            </h3>
            <p className="text-text-secondary text-sm">
              Building excellence since 2009. Modern construction solutions for tomorrow.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Commercial Construction</li>
              <li>Residential Building</li>
              <li>Renovation & Remodeling</li>
              <li>Infrastructure Projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Get Started</h4>
            <p className="text-text-secondary text-sm mb-4">
              Ready to start your construction project?
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-text-secondary">
          © 2024 Jebin Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
