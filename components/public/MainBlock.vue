<template>
  <div v-if="results.length >= 4" class="main-block flex-col lg:flex-row">
    <div class="news-block lg:border-r-4 lg:w-1/2" :style="style(results[0])">
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: results[0][$t('slug')] } })">
        <div class="news-block__info">
          <span class="tag">
            {{ results[0].rubrics[0][$t('title')] }}
          </span>
          <div class="news-block__title">
            {{ results[0][$t('title')] }}
          </div>
          <span class="news-block__date">
            {{ $dayjs(results[0].created_at).format('DD MM YYYY') }}
          </span>
        </div>
      </nuxt-link>
    </div>

    <div class="flex flex-col w-full lg:w-1/2">
      <div class="news-block h-full lg:text-sm" :style="style(results[1])">
        <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: results[1][$t('slug')] } })">
          <div class="news-block__info">
            <span class="tag">
              {{ results[1].rubrics[0][$t('title')] }}
            </span>
            <div class="news-block__title">
              {{ results[1][$t('title')] }}
            </div>
            <span class="news-block__date">
              {{ $dayjs(results[1].created_at).format('DD MM YYYY') }}
            </span>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col h-full md:flex-row">
        <div class="news-block w-full md:border-r-4 lg:text-xs lg:w-1/2" :style="style(results[2])">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: results[2][$t('slug')] } })">
            <div class="news-block__info">
              <span class="tag">
                {{ results[2].rubrics[0][$t('title')] }}
              </span>
              <div class="news-block__title">
                {{ results[2][$t('title')] }}
              </div>
              <span class="news-block__date">
                {{ $dayjs(results[2].created_at).format('DD MM YYYY') }}
              </span>
            </div>
          </nuxt-link>
        </div>

        <div class="news-block w-full lg:text-xs lg:w-1/2" :style="style(results[3])">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: results[3][$t('slug')] } })">
            <div class="news-block__info">
              <span class="tag">
                {{ results[3].rubrics[0][$t('title')] }}
              </span>
              <div class="news-block__title">
                {{ results[3][$t('title')] }}
              </div>
              <span class="news-block__date">
                {{ $dayjs(results[3].created_at).format('DD MM YYYY') }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/mixins/Mixin'
import PostMixin from '@/mixins/PostMixin'

export default {
  mixins: [Mixin, PostMixin],
  created () {
    this.pageSize = 4
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.main-block {
  @apply flex;
}

.news-block {
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
  .main-block > .news-block {
    height: 30rem
  }
}
</style>
