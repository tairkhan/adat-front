<template>
  <promo-form class="lg:w-1/3" />
</template>

<script>
import PromoForm from '@/components/admin/PromoForm'

export default {
  layout: 'admin',
  components: {
    PromoForm
  },
  head () {
    return {
      title: 'Создать промо'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
