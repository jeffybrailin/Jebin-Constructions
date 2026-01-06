'use client'

import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/Button'

export const Header: React.FC = () => {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform' // Replace with your Google Form URL

  return (
    <header className="sticky top-0 z-50 bg-bg-secondary border-b border-gray-200 dark:border-gray-700 shadow-elevation-1 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
            <span className="text-3xl">🏗️</span>
            <span>Jebin Constructions</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-text-primary hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-text-primary hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-text-primary hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="animate-pulse">
              Register
            </Button>
          </a>
        </div>
      </nav>
    </header>
  )
}

