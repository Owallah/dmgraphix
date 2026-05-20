'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [mounted, setMounted]   = useState(false)
  const [visible, setVisible]   = useState(false)
  const [hovered, setHovered]   = useState(false)   // hovering a link/button
  const [clicking, setClicking] = useState(false)
  const [label, setLabel]       = useState('')       // text that appears on hover

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // main dot — snappy
  const dotX = useSpring(rawX, { stiffness: 900, damping: 45 })
  const dotY = useSpring(rawY, { stiffness: 900, damping: 45 })

  // outer ring — laggy / trailing
  const ringX = useSpring(rawX, { stiffness: 160, damping: 22 })
  const ringY = useSpring(rawY, { stiffness: 160, damping: 22 })

  useEffect(() => {
    setMounted(true)

    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Detect hoverable elements
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a, button, [data-cursor], [data-cursor-label]'
      )
      if (target) {
        setHovered(true)
        setLabel(target.getAttribute('data-cursor-label') ?? '')
      } else {
        setHovered(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', onMove,     { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseover',  onOver,    { passive: true })

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseover',  onOver)
    }
  }, [rawX, rawY, visible])

  if (!mounted) return null

  return (
    <>
      {/* Outer ring — trails behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: hovered ? '#fa7805' : '#ffffff',
        }}
        animate={{
          width:   hovered ? 56 : clicking ? 24 : 40,
          height:  hovered ? 56 : clicking ? 24 : 40,
          opacity: visible ? 1 : 0,
          borderWidth: hovered ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Label that appears on hover */}
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center text-[9px] font-mono font-500 uppercase tracking-widest text-white whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot — snappy */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          background: hovered ? '#fa7805' : '#ffffff',
        }}
        animate={{
          width:   hovered ? 6  : clicking ? 10 : 6,
          height:  hovered ? 6  : clicking ? 10 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 900, damping: 45 }}
      />
    </>
  )
}
