<template>
  <div v-if="posts.length >= 4" class="main-block flex-col lg:flex-row">
    <div class="news-block lg:border-r-8 lg:w-1/2" :style="style(posts[0])">
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: posts[0][$t('slug')] } })">
        <div class="news-block__info">
          <span class="tag">
            {{ posts[0].rubrics[0][$t('title')] }}
          </span>
          <div class="news-block__title">
            {{ posts[0][$t('title')] }}
          </div>
          <span class="news-block__date">
            <span class="font-bold">АДАТ</span> {{ $dayjs(posts[0].created_at).format('ll') }}
          </span>
        </div>
      </nuxt-link>
    </div>

    <div class="flex flex-col w-full lg:w-1/2">
      <div class="news-block h-full lg:text-sm" :style="style(posts[1])">
        <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: posts[1][$t('slug')] } })">
          <div class="news-block__info">
            <span class="tag">
              {{ posts[1].rubrics[0][$t('title')] }}
            </span>
            <div class="news-block__title">
              {{ posts[1][$t('title')] }}
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col h-full md:flex-row">
        <div class="news-block w-full md:border-r-8 lg:text-xs lg:w-1/2" :style="style(posts[2])">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: posts[2][$t('slug')] } })">
            <div class="news-block__info">
              <span class="tag">
                {{ posts[2].rubrics[0][$t('title')] }}
              </span>
              <div class="news-block__title">
                {{ posts[2][$t('title')] }}
              </div>
            </div>
          </nuxt-link>
        </div>

        <div class="news-block w-full lg:text-xs lg:w-1/2" :style="style(posts[3])">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: posts[3][$t('slug')] } })">
            <div class="news-block__info">
              <span class="tag">
                {{ posts[3].rubrics[0][$t('title')] }}
              </span>
              <div class="news-block__title">
                {{ posts[3][$t('title')] }}
              </div>
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
    this.postPageSize = 4
    this.status = 'published'
    this.on_main_page = true
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.main-block {
  @apply flex;
}

.news-block {
  @apply border-white border-b-8;

  &:hover &__info {
    background-color: rgba(0, 0, 0, .3);
  }

  &__info {
    @apply flex flex-col justify-end h-full p-4;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
    transition: all .25s;
  }

  .tag {
    @apply self-start;
  }

  &__title {
    @apply uppercase text-white font-bold mt-6 w-full;
  }

  &__date {
    @apply text-white text-sm mt-4;
  }
}

@screen lg {
  .main-block > .news-block {
    height: 30rem
  }
}
</style>
