'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseX: number
  baseY: number
  alpha: number
  targetAlpha: number
  color: string
}

const BRAND_BLUE  = '#031d80'
const BRAND_ORANGE = '#fa7805'
const PARTICLE_COUNT = 110
const CONNECTION_DIST = 130
const CURSOR_REPEL_DIST = 120
const CURSOR_FORCE = 3.5

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse     = useRef({ x: -9999, y: -9999 })
  const rafRef    = useRef<number>(0)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const particles: Particle[] = []

    const isDark = document.documentElement.classList.contains('dark')
    const bgAlpha = isDark ? 0.015 : 0.012

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
    }

    function spawn(): Particle {
      const x = Math.random() * W
      const y = Math.random() * H
      // ~15 % orange, rest blue
      const color = Math.random() < 0.15 ? BRAND_ORANGE : BRAND_BLUE
      return {
        x, y, baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        targetAlpha: Math.random() * 0.5 + 0.2,
        color,
      }
    }

    function init() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawn())
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      const mx = mouse.current.x
      const my = mouse.current.y

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // drift
        p.x += p.vx
        p.y += p.vy

        // wrap edges
        if (p.x < -20)  p.x = W + 20
        if (p.x > W+20) p.x = -20
        if (p.y < -20)  p.y = H + 20
        if (p.y > H+20) p.y = -20

        // cursor repulsion
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CURSOR_REPEL_DIST && dist > 0) {
          const force  = (CURSOR_REPEL_DIST - dist) / CURSOR_REPEL_DIST
          const angle  = Math.atan2(dy, dx)
          p.x += Math.cos(angle) * force * CURSOR_FORCE
          p.y += Math.sin(angle) * force * CURSOR_FORCE
          p.targetAlpha = Math.min(1, p.alpha + force * 0.5)
        } else {
          p.targetAlpha = Math.random() < 0.003
            ? Math.random() * 0.5 + 0.15
            : p.targetAlpha
        }

        p.alpha += (p.targetAlpha - p.alpha) * 0.05

        // draw dot
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, '0')
        ctx!.fill()

        // draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q    = particles[j]
          const cdx  = p.x - q.x
          const cdy  = p.y - q.y
          const cd   = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cd < CONNECTION_DIST) {
            const opacity = (1 - cd / CONNECTION_DIST) * 0.15 * p.alpha
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = p.color + Math.round(opacity * 255).toString(16).padStart(2, '0')
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }

    window.addEventListener('mousemove', onMove, { passive: true })
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
