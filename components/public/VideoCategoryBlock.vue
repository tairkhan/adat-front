<template>
  <!-- https://i.ytimg.com/vi/ffwefwefwef/hqdefault.jpg -->
  <div class="flex flex-col lg:flex-row">
    <div
      v-for="item in data"
      :key="item.id"
      class="article lg:border-r-4 w-full lg:w-1/3"
      :style="{ background: `gray url('${extractCover(item.content)}') no-repeat center`, 'background-size': 'cover' }"
    >
      <nuxt-link to="/">
        <div class="article__info">
          <span class="tag">
            {{ item.rubrics[0].title }}
          </span>
          <div class="article__title">
            {{ item.title }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    extractCover (content) {
      content = JSON.parse(content)
      const source = content.blocks[0].data.source.split('/')
      const result = source[source.length]

      return `https://i.ytimg.com/vi/${result}/hqdefault.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  @apply h-64 border-white border-b-4;

  &:hover &__info {
    background-color: rgba(0, 0, 0, .6);
  }

  &__info {
    @apply flex flex-col justify-center h-full p-4 text-center;
    background-color: rgba(0, 0, 0, .5);
    transition: all .25s;
  }

  .tag {
    @apply self-center;
  }

  &__title {
    @apply uppercase text-white font-bold mt-6 w-full;
  }
}
</style>
