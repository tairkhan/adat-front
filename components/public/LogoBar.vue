<template>
  <div class="bg-red-600 py-8 text-white">
    <nuxt-link :to="localePath('index')" class="inline-block leading-tight">
      <span class="font-bold text-4xl">
        ADAT.kg
      </span>
      <p class="text-sm text-white">
        {{ $t('logo') }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
