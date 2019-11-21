<template>
  <promo-form :entity="entity" />
</template>

<script>
import PromoForm from '@/components/admin/PromoForm'

export default {
  layout: 'admin',
  components: {
    PromoForm
  },
  async asyncData ({ $axios, params }) {
    const entity = await $axios.$get(`promos/${params.id}`)
    return { entity }
  },
  head () {
    return {
      title: 'Промо'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
