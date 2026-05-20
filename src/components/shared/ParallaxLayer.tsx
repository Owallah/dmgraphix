'use client'

import { motion } from 'motion/react'
import { useParallax } from '@/hooks/useParallax'
import { cn } from '@/lib/utils'

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

/**
 * Wraps children in a scroll-driven parallax container.
 * speed: positive = moves up on scroll, negative = moves down.
 */
export default function ParallaxLayer({ children, speed = 0.3, className }: ParallaxLayerProps) {
  const { ref, y } = useParallax({ speed })

  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: 'transform' }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}
