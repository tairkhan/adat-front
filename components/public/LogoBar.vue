<template>
  <div class="bg-red-600 flex flex-col justify-between lg:items-center lg:flex-row pb-2 lg:pb-0">
    <div class="py-2 lg:py-8">
      <nuxt-link :to="localePath('index')" class="inline-block leading-tight text-white">
        <span class="font-bold text-4xl">
          ADAT.kg
        </span>
        <p class="text-sm text-white">
          {{ $t('logo') }}
        </p>
      </nuxt-link>
    </div>

    <div class="lg:w-3/4 flex flex-col lg:flex-row">
      <div v-if="header_main" class="h-24 lg:w-4/6 lg:mr-4">
        <a :href="header_main.promo_url" target="_blank">
          <div class="h-full" :style="`background: url(${header_main.image_url}) center/contain no-repeat`"></div>
        </a>
      </div>

      <div v-if="header_secondary" class="h-24 lg:w-2/6">
        <a :href="header_secondary.promo_url" target="_blank">
          <div class="h-full" :style="`background: url(${header_secondary.image_url}) center/contain no-repeat`"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PromoMixin from '@/mixins/PromoMixin'

export default {
  mixins: [PromoMixin],
  data () {
    return {
      header_main: null,
      header_secondary: null
    }
  },
  async created () {
    this.promoPageSize = 2
    await this.fetchPromos()
    this.promos.map((result) => {
      const position = result.position
      this[position] = result
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
