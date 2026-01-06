'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface IconProps {
  name: string
  className?: string
  size?: number
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  return (
    <span
      className={cn('material-icons', className)}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  )
}

