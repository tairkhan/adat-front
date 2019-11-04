<template>
  <post-form :entity="entity" />
</template>

<script>
import PostForm from '@/components/admin/PostForm'

export default {
  layout: 'admin',
  components: {
    PostForm
  },
  data () {
    return {
      entity: null
    }
  },
  async asyncData ({ app, params, error }) {
    try {
      const entity = await app.$axios.$get(`posts/${params.id}`)
      return { entity }
    } catch (err) {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
