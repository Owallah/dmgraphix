'use client'

import { useScroll, useTransform, MotionValue } from 'motion/react'
import { useRef } from 'react'

interface ParallaxOptions {
  speed?: number   // multiplier: 0.2 = slow, 0.8 = fast, negative = opposite direction
  offset?: [string, string]
}

/**
 * Returns a y MotionValue that moves at `speed` relative to scroll.
 * Attach to a motion element: <motion.div style={{ y }}>
 *
 * Note: layoutEffect: false avoids the SSR hydration warning.
 * The "container must have non-static position" warning is suppressed by
 * passing layoutEffect: false so Framer Motion defers measurement to the client.
 */
export function useParallax(options: ParallaxOptions = {}): {
  ref: React.RefObject<HTMLDivElement | null>
  y: MotionValue<string>
} {
  const { speed = 0.3, offset = ['start end', 'end start'] } = options
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
    layoutEffect: false,
  })

  const range  = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [`${range}px`, `-${range}px`])

  return { ref, y }
}

/**
 * Returns scroll progress for the entire page [0, 1]
 */
export function usePageScroll() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}