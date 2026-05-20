import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-05-14',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ─── GROQ Queries ─────────────────────────────────────────────────────────────

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    tagline,
    category,
    tags,
    coverImage,
    client,
    year,
    featured,
    publishedAt,
    results
  }
`

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    tagline,
    category,
    tags,
    coverImage,
    beforeImage,
    afterImage,
    client,
    year,
    results,
    description,
    gallery,
    featured,
    publishedAt
  }
`

export const FEATURED_PROJECTS_QUERY = `
  *[_type == "project" && featured == true] | order(publishedAt desc) [0..5] {
    _id,
    title,
    slug,
    tagline,
    category,
    coverImage,
    client,
    year,
    results
  }
`

export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author-> { name, image, role },
    categories,
    publishedAt,
    estimatedReadingTime
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author-> { name, image, bio, role },
    categories,
    publishedAt,
    estimatedReadingTime,
    body
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    role,
    company,
    content,
    rating,
    avatar,
    featured
  }
`

export const TEAM_QUERY = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    image,
    socials
  }
`
