'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 1 | 2 | 3 | 4
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 2,
  hover = false,
  className,
  ...props
}) => {
  const elevations = {
    1: 'shadow-elevation-1',
    2: 'shadow-elevation-2',
    3: 'shadow-elevation-3',
    4: 'shadow-elevation-4',
  }

  return (
    <div
      className={cn(
        'rounded-lg bg-bg-secondary p-padding',
        elevations[elevation],
        hover && 'transition-all duration-300 ease-in-out hover:shadow-elevation-3 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

