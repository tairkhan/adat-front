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
  async asyncData ({ $axios, params }) {
    const entity = await $axios.$get(`posts/${params.id}`)
    return { entity }
  },
  head () {
    return {
      title: `Новости | ${this.entity.title}`
    }
  },
  data () {
    return {
      entity: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
