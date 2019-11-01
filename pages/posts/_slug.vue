<template>
  <Article :data="data" />
</template>

<script>
import Article from '@/components/public/Article'

export default {
  components: {
    Article
  },
  async asyncData ({ app, params, error }) {
    try {
      const data = await app.$axios.$get(`posts/${params.slug}`)
      return { data }
    } catch (err) {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
