'use client'

import dynamic from 'next/dynamic'

// ssr: false is only valid inside Client Components.
// This thin wrapper lets layout.tsx (a Server Component) safely use it.
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false })

export default function CustomCursorLoader() {
  return <CustomCursor />
}
