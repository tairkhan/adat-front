<template>
  <Article :data="data" />
</template>

<script>
import Article from '@/components/public/Article'

import Mixin from '@/mixins/Mixin'

export default {
  components: {
    Article
  },
  mixins: [Mixin],
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get(`posts/${params.slug}`)
    return { data }
  },
  head () {
    return {
      title: this.data[this.$t('title')],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.excerpt(this.data[this.$t('content')])
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
