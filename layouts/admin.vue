<template>
  <div class="h-screen flex overflow-hidden">
    <Aside class="w-56" />
    <div class="flex-grow pl-8 py-8 pr-56 overflow-y-auto">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Aside from '@/components/admin/Aside.vue'

export default {
  middleware: 'auth',
  components: {
    Aside
  },
  head () {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: null
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: null
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
