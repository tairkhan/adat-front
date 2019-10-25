<template>
  <div class="aside-block">
    <div class="border-b-2 border-red-600">
      <h3 class="category">
        Все статьи
      </h3>
    </div>

    <div
      v-for="(item, i) in results"
      :key="i"
      class="py-5 border-b text-center"
    >
      <div class="mb-5 text-sm">
        <span class="font-bold">АДАТ</span> - <span>{{ new Date(item.created_at).toLocaleDateString() }}</span>
      </div>
      <p>
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      results: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const params = { page_size: 4 }
      const data = await this.$axios.$get('posts', { params })
      this.results = data.results
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-block {
  @apply text-gray-800;
}
</style>
