<template>
  <Article :data="data" />
</template>

<script>
import Article from '@/components/public/Article'

export default {
  components: {
    Article
  },
  async asyncData ({ store, params, error }) {
    try {
      const data = await store.dispatch('directories/fetchOne', { name: 'posts', id: params.slug })
      return { data }
    } catch (err) {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
