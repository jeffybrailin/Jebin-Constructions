'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-1 text-text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2 rounded-lg border-2 transition-all duration-300 ease-in-out',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'bg-bg-secondary text-text-primary',
            error
              ? 'border-accent focus:ring-accent focus:border-accent'
              : 'border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-accent animate-slide-down">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-text-secondary">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

