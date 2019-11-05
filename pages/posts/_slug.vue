<template>
  <Article :data="data" />
</template>

<script>
import Article from '@/components/public/Article'

export default {
  components: {
    Article
  },
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get(`posts/${params.slug}`)
    return { data }
  },
  head () {
    return {
      title: this.data[this.$t('title')]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
