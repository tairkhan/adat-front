<template>
  <div class="flex flex-wrap justify-between py-1 text-white text-xs" style="background-color: #171717;">
    <div class="flex">
      <div v-if="currencies.USD">
        <span class="mr-4 text-sm">$ {{ currencies.USD }}</span>
      </div>
      <div v-if="currencies.EUR">
        <span class="mr-4 text-sm">€ {{ currencies.EUR }}</span>
      </div>
      <div v-if="currencies.RUB">
        <span class="mr-4 text-sm">₽ {{ currencies.RUB }}</span>
      </div>
      <div v-if="currencies.KZT">
        <span class="mr-4 text-sm">₸ {{ currencies.KZT }}</span>
      </div>
    </div>

    <div class="flex justify-between w-full lg:w-auto">
      <div class="flex lg:mr-12 text-gray-500">
        <nuxt-link class="mr-4 hover:text-white" :to="switchLocalePath('ru')">
          <div class="flex items-center">
            <img class="mr-2" src="/flag1.png">
            <span :class="{ 'text-white': $i18n.locale === 'ru' }">РУ</span>
          </div>
        </nuxt-link>
        <nuxt-link class="hover:text-white" :to="switchLocalePath('kg')">
          <div class="flex items-center">
            <img class="mr-2" src="/flag2.png">
            <span :class="{ 'text-white': $i18n.locale === 'kg' }">КГ</span>
          </div>
        </nuxt-link>
      </div>

      <div>
        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://facebook.com">
          <fa-icon :icon="['fab', 'facebook']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://twitter.com">
          <fa-icon :icon="['fab', 'twitter']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://vimeo.com">
          <fa-icon :icon="['fab', 'vimeo']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://vk.com">
          <fa-icon :icon="['fab', 'vk']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com">
          <fa-icon :icon="['fab', 'youtube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currencies: {
        USD: null,
        EUR: null,
        KZT: null,
        RUB: null
      }
    }
  },
  async created () {
    const exchange = await this.$axios.$get('exchange')
    const rates = exchange.rates
    rates.map((rate) => {
      const value = rate.value
      this.currencies[rate.currency] = value.slice(0, value.indexOf(',') + 3).replace(',', '.')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
