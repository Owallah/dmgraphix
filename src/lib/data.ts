import type { NavItem, Service } from '@/types'

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    slug: 'graphic-design',
    tagline: 'Visuals that stop the scroll.',
    description:
      'From social media assets to full brand collateral, we craft design that communicates, converts, and captivates across every format.',
    features: ['Brand Identity', 'Social Media Design', 'Print & Packaging', 'Illustration', 'Motion Graphics', 'Presentation Design'],
    icon: '✦',
    category: 'graphic-design',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    slug: 'web-development',
    tagline: 'Fast, beautiful, built to rank.',
    description:
      'Performance-first websites built with modern stacks — designed to impress, engineered to perform, and optimised to be found.',
    features: ['Next.js & React', 'E-commerce', 'CMS Integration', 'SEO Architecture', 'API Development', 'Performance Optimisation'],
    icon: '⬡',
    category: 'web-development',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    tagline: 'Interfaces people love using.',
    description:
      'User-centred design that turns complexity into clarity. From wireframes to polished prototypes — every click, tap, and scroll considered.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing', 'Figma Delivery'],
    icon: '◈',
    category: 'ui-ux',
  },
  {
    id: 'branding',
    title: 'Brand Strategy',
    slug: 'branding',
    tagline: 'Identity that outlasts the trend.',
    description:
      'We build brands from the ground up — positioning, voice, visual identity, and the guidelines that keep it consistent everywhere it lives.',
    features: ['Brand Discovery', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Tone of Voice', 'Brand Audits'],
    icon: '◉',
    category: 'branding',
  },
  {
    id: 'software',
    title: 'Software Development',
    slug: 'software-development',
    tagline: 'Systems that scale with you.',
    description:
      'Custom software and web applications engineered for reliability. From internal tools to customer-facing platforms — built clean, built to last.',
    features: ['Web Applications', 'API Design', 'Database Architecture', 'SaaS Products', 'Automation', 'Cloud Deployment'],
    icon: '⬟',
    category: 'software',
  },
  {
    id: 'print',
    title: 'Print & Production',
    slug: 'print-production',
    tagline: 'Tangible design that demands attention.',
    description:
      'Print-ready files crafted with production precision — from business cards to billboards, every spec dialled in for the press.',
    features: ['Business Stationery', 'Marketing Collateral', 'Signage & Banners', 'Packaging', 'Publication Design', 'Large Format'],
    icon: '▣',
    category: 'print',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  // { value: 12, suffix: '', label: 'Industry Awards' },
]

// ─── Service categories (for filters) ────────────────────────────────────────

export const SERVICE_CATEGORIES = [
  { value: 'all', label: 'All Work' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'web-development', label: 'Web Dev' },
  { value: 'ui-ux', label: 'UI/UX' },
  { value: 'branding', label: 'Branding' },
  { value: 'software', label: 'Software' },
  { value: 'print', label: 'Print' },
] as const

// ─── Placeholder testimonials ─────────────────────────────────────────────────

export const PLACEHOLDER_TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Okonkwo',
    role: 'CEO',
    company: 'Luminary Brands',
    content:
      'DM Graphix transformed our entire visual identity. The team is incredibly talented and deeply understand how design drives business. Delivery was flawless.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Mutua',
    role: 'Marketing Director',
    company: 'TechNova Ltd',
    content:
      'Our website redesign drove a 40% increase in qualified leads within 3 months. The combination of stunning design and SEO thinking is rare — DM Graphix nails both.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amara Diallo',
    role: 'Founder',
    company: 'Roots & Routes',
    content:
      'From the brand discovery session to final delivery, every step felt intentional. We now have a brand we are genuinely proud to put in front of the world.',
    rating: 5,
  },
]

// ─── Process steps ────────────────────────────────────────────────────────────

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We deep-dive into your goals, audience, and competitive landscape. No assumptions — just clarity.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We map out the creative direction, technical approach, and success metrics before a single pixel is placed.',
  },
  {
    step: '03',
    title: 'Creation',
    description: 'Concept to execution with precision — iterative, collaborative, and always aligned to the brief.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Production-ready files, live code, or both. Handover includes all assets, documentation, and support.',
  },
]
