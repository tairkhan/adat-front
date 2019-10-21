import { morphism } from 'morphism'

export const postSchema = morphism({
  id: 'id',
  cover: 'cover',
  title: 'title',
  title_kg: 'title_kg',
  content: entity => entity.content || '{}',
  content_kg: entity => entity.content_kg || '{}',
  status: 'status'
})

export const rubricSchema = morphism({
  id: 'id',
  title: 'title',
  title_kg: 'title_kg'
})
