<template>
  <div v-if="loaded" class="main-block flex-col lg:flex-row">
    <div class="article lg:border-r-4 lg:w-1/2" :style="style(results[0].cover_image_url)">
      <nuxt-link to="/">
        <div class="article__info">
          <span class="tag">
            {{ results[0].rubrics[0].title }}
          </span>
          <div class="article__title">
            {{ results[0].title }}
          </div>
          <span class="article__date">
            {{ new Date(results[0].created_at).toLocaleDateString() }}
          </span>
        </div>
      </nuxt-link>
    </div>

    <div class="flex flex-col w-full lg:w-1/2">
      <div class="article h-full lg:text-sm" :style="style(results[1].cover_image_url)">
        <nuxt-link to="/">
          <div class="article__info">
            <span class="tag">
              {{ results[1].rubrics[0].title }}
            </span>
            <div class="article__title">
              {{ results[1].title }}
            </div>
            <span class="article__date">
              {{ new Date(results[1].created_at).toLocaleDateString() }}
            </span>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col h-full md:flex-row">
        <div class="article w-full md:border-r-4 lg:text-xs lg:w-1/2" :style="style(results[2].cover_image_url)">
          <nuxt-link to="/">
            <div class="article__info">
              <span class="tag">
                {{ results[2].rubrics[0].title }}
              </span>
              <div class="article__title">
                {{ results[2].title }}
              </div>
              <span class="article__date">
                {{ new Date(results[2].created_at).toLocaleDateString() }}
              </span>
            </div>
          </nuxt-link>
        </div>

        <div class="article w-full lg:text-xs lg:w-1/2" :style="style(results[3].cover_image_url)">
          <nuxt-link to="/">
            <div class="article__info">
              <span class="tag">
                {{ results[3].rubrics[0].title }}
              </span>
              <div class="article__title">
                {{ results[3].title }}
              </div>
              <span class="article__date">
                {{ new Date(results[3].created_at).toLocaleDateString() }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loaded: false,
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
      this.loaded = true
    },
    style (cover) {
      return {
        background: `gray url('${cover}') no-repeat center`,
        'background-size': 'cover'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-block {
  @apply flex;
}

.article {
  @apply border-white border-b-4;

  &:hover &__info {
    background-color: rgba(0, 0, 0, .6);
  }

  &__info {
    @apply flex flex-col justify-end h-full p-4;
    background-color: rgba(0, 0, 0, .5);
    transition: all .25s;
  }

  .tag {
    @apply self-start;
  }

  &__title {
    @apply uppercase text-white font-bold mt-6 w-full;
  }

  &__date {
    @apply text-xs text-white mt-4;
  }
}

@screen lg {
  .main-block > .article {
    height: 30rem
  }
}
</style>
