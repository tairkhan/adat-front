<template>
  <div>
    <h3 class="category">
      Национальный интерес
    </h3>

    <div class="flex flex-col lg:flex-row">
      <div class="w-1/2 h-full my-5 mr-5">
        <div class="article" :style="{ background: `gray url('') no-repeat center`, 'background-size': 'cover', 'height': '24rem' }">
          <nuxt-link to="/">
            <div class="article__info">
              <span class="tag">
                В мире
              </span>
            </div>
          </nuxt-link>
        </div>

        <h3>
          Lorem ipsum
        </h3>
        <div class="mb-5 text-sm">
          <!-- <span class="font-bold">АДАТ</span> - <span>{{ new Date(item.created_at).toLocaleDateString() }}</span> -->
          <span class="font-bold">АДАТ</span> - <span>10.12.91</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      <div class="flex flex-col w-1/2">
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
.article {
  &__info {
    @apply flex flex-col justify-end h-full p-4;
  }

  .tag {
    @apply self-start;
  }
}
</style>
