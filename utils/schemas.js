import { morphism } from 'morphism'

export const postSchema = morphism({
  cover_image_url: ({ content }) => content.cover_image_url || '',
  title: 'title',
  title_kg: 'title_kg',
  content: ({ content }) => content || '{}',
  content_kg: entity => entity.content_kg || '{}',
  rubrics: ({ rubrics }) => rubrics ? rubrics.map(item => item.id) : [],
  status: ({ status }) => status || 'draft'
})

export const rubricSchema = morphism({
  title: 'title',
  title_kg: 'title_kg'
})
