<template>
  <div>
    <h3 class="category">
      Общество
    </h3>
    <div class="flex flex-col">
      <div
        v-for="(item, i) in results"
        :key="i"
        class="flex my-5"
      >
        <img :src="item.cover_image_url" class="w-32 h-24 mr-2 border">
        <div>
          <h3>
            {{ item.title }}
          </h3>
          <div class="text-sm">
            <span class="font-bold">АДАТ</span> - <span>{{ new Date(item.created_at).toLocaleDateString() }}</span>
          </div>
        </div>
      </div>
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

</style>
