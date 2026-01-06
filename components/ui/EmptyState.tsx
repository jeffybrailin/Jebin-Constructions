'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12 px-4', className)}>
      {icon && <div className="mb-4 text-6xl text-text-secondary">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
      {description && (
        <p className="text-text-secondary text-center max-w-md mb-6">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  )
}

