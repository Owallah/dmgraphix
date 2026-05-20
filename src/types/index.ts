// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// ─── Services ─────────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'graphic-design'
  | 'web-development'
  | 'ui-ux'
  | 'branding'
  | 'software'
  | 'print'

export interface Service {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  features: string[]
  icon: string
  category: ServiceCategory
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  tagline: string
  category: ServiceCategory
  tags: string[]
  coverImage: SanityImage
  beforeImage?: SanityImage
  afterImage?: SanityImage
  client: string
  year: number
  results?: ProjectResult[]
  description: string
  gallery?: SanityImage[]
  featured: boolean
  publishedAt: string
}

export interface ProjectResult {
  label: string
  value: string
  suffix?: string
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  coverImage: SanityImage
  author: Author
  categories: string[]
  publishedAt: string
  estimatedReadingTime?: number
  body: PortableTextBlock[]
}

export interface Author {
  name: string
  image?: SanityImage
  bio?: string
  role?: string
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  _id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: SanityImage
  featured: boolean
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  image?: SanityImage
  socials?: {
    linkedin?: string
    twitter?: string
    dribbble?: string
    behance?: string
  }
}

// ─── Sanity primitives ────────────────────────────────────────────────────────

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  caption?: string
}

export type PortableTextBlock = {
  _type: string
  _key: string
  [key: string]: unknown
}

// ─── Contact form ─────────────────────────────────────────────────────────────

export interface ContactFormData {
  // Step 1 — Who you are
  name: string
  email: string
  company?: string
  phone?: string

  // Step 2 — Your project
  serviceType: ServiceCategory | ''
  budget: BudgetRange
  timeline: TimelineOption
  projectDescription: string

  // Step 3 — Anything else
  referralSource: string
  message?: string
}

export type BudgetRange =
  | 'under-1k'
  | '1k-5k'
  | '5k-15k'
  | '15k-50k'
  | '50k-plus'
  | ''

export type TimelineOption =
  | 'asap'
  | '1-month'
  | '1-3-months'
  | '3-6-months'
  | 'flexible'
  | ''
