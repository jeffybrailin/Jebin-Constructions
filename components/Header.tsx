'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export const Header: React.FC = () => {
  const GOOGLE_FORM_URL = 'https://forms.gle/h2XQahLxJzywDXf47'
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-bg-secondary border-b border-gray-200 dark:border-gray-700 shadow-elevation-1 backdrop-blur-sm bg-opacity-95">
      {/* Top row: Logo + Actions */}
      <div className="container mx-auto px-4 pt-3 pb-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Jebin Constructions Logo"
            width={40}
            height={40}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="leading-tight">Jebin Constructions</span>
        </Link>

        {/* Right side: theme toggle + register button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="font-heading text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 animate-pulse">
              Register
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom row: Nav links — always visible on all screen sizes */}
      <nav className="border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex items-center overflow-x-auto scrollbar-none gap-1 sm:gap-2 md:gap-6 py-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href} className="flex-shrink-0">
                  <Link
                    href={link.href}
                    className={`
                      inline-block px-3 py-2 text-sm sm:text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap
                      ${isActive
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-text-primary hover:text-primary hover:bg-primary/5'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
