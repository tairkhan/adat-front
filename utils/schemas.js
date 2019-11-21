import { morphism } from 'morphism'

export const postSchema = morphism({
  cover_image_url: entity => entity.cover_image_url || '',
  title: 'title',
  title_kg: 'title_kg',
  content: ({ content }) => content || '{}',
  content_kg: entity => entity.content_kg || '{}',
  rubrics: ({ rubrics }) => rubrics ? rubrics.map(item => item.id) : [],
  status: ({ status }) => status || 'draft',
  on_main_page: entity => entity.on_main_page || false
})

export const rubricSchema = morphism({
  title: 'title',
  title_kg: 'title_kg'
})

export const promoSchema = morphism({
  promo_url: 'promo_url',
  image_url: 'image_url',
  position: ({ position }) => position || 'header_main',
  active: ({ active }) => active || false
})
