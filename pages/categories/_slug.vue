<template>
  <div></div>
</template>

<script>

export default {
  layout: 'admin',
  components: {
  },
  data () {
    return {
    }
  },
  asyncData ({ store, params, error }) {
    // this.$store.dispatch('directories/fetch', { name: 'posts', params: { page_size: 100 } })
    //   .then((entity) => {
    //     return { entity }
    //   })
    //   .catch(() => error({ statusCode: 404 }))
  }
}
</script>

<style lang="scss" scoped>

</style>
