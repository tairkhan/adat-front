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
  asyncData ({ store, params, error }) {
    return store.dispatch('directories/fetchOne', { name: 'posts', id: params.id })
      .then((entity) => {
        return { entity }
      })
      .catch(() => error({ statusCode: 404 }))
  }
}
</script>

<style lang="scss" scoped>

</style>
