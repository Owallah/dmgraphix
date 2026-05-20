'use client'

import {
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from 'motion/react'
import { useRef } from 'react'

interface ParallaxOptions {
  speed?: number
  offset?: UseScrollOptions['offset']
}

export function useParallax(
  options: ParallaxOptions = {}
): {
  ref: React.RefObject<HTMLDivElement | null>
  y: MotionValue<string>
} {
  const {
    speed = 0.3,
    offset = ['start end', 'end start'],
  } = options

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
    // layoutEffect: false,
  })

  const range = speed * 100

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${range}px`, `-${range}px`]
  )

  return { ref, y }
}

export function usePageScroll() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}