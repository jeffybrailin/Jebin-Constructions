'use client'

import React from 'react'
import Link from 'next/link'

const GOOGLE_FORM_URL = 'https://forms.gle/h2XQahLxJzywDXf47'

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
              Building excellence since 2022. Modern construction solutions for tomorrow.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-text-primary">Our Projects</h4>
              <ul className="space-y-1 text-sm text-text-secondary">
                <li>
                  <Link href="/projects" className="hover:text-primary transition-colors">
                    View All Projects
                  </Link>
                </li>
              </ul>
            </div>
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
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                  Terms & Conditions
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
              <li>
                <Link href="/services/testings" className="hover:text-primary transition-colors">
                  Testings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Contact Us</h4>
            <div className="space-y-4 text-sm text-text-secondary">
              <div>
                <p className="font-medium text-text-primary">Mobile</p>
                <p>+91 94446 40146</p>
                <p>+91 91592 92954</p>
              </div>
              <div>
                <p className="font-medium text-text-primary">Email</p>
                <p>jebinconstruction@gmail.com</p>
              </div>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium font-heading"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-text-secondary">
          © 2026 Jebin Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
