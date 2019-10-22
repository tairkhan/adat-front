import { morphism } from 'morphism'

export const postSchema = morphism({
  id: 'id',
  cover_image_url: 'cover_image_url',
  title: 'title',
  title_kg: 'title_kg',
  content: ({ content }) => content || '{}',
  content_kg: entity => entity.content_kg || '{}',
  rubrics: ({ rubrics }) => rubrics ? rubrics.map(item => item.id) : [],
  status: ({ status }) => status || 'draft'
})

export const rubricSchema = morphism({
  id: 'id',
  title: 'title',
  title_kg: 'title_kg'
})
