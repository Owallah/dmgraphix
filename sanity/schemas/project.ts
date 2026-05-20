import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Graphic Design', value: 'graphic-design' },
          { title: 'Web Development', value: 'web-development' },
          { title: 'UI/UX', value: 'ui-ux' },
          { title: 'Branding', value: 'branding' },
          { title: 'Software', value: 'software' },
          { title: 'Print', value: 'print' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt text' }] }),
    defineField({ name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'client', title: 'Client Name', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({
      name: 'results',
      title: 'Results / Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'suffix', type: 'string', title: 'Suffix (e.g. %, x, +)' },
        ],
      }],
    }),
    defineField({ name: 'description', title: 'Full Description', type: 'text' }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'coverImage' },
  },
})
