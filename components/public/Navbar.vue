<template>
  <div>
    <span class="inline-block py-1 cursor-pointer lg:hidden" @click="navbarAction">
      <fa-icon icon="bars" class="fa-fw" />
    </span>

    <div id="navbar" class="navbar">
      <div class="flex flex-1 flex-col lg:flex-row lg:flex-wrap">
        <nuxt-link class="navbar__link lg:mr-8" :to="localePath('index')">
          {{ $t('rubrics.main') }}
        </nuxt-link>

        <nuxt-link class="navbar__link lg:mr-8" :to="localePath({ name: 'categories-slug' })">
          {{ $t('rubrics.all') }}
        </nuxt-link>

        <nuxt-link
          v-for="(item, i) in rubrics"
          :key="i"
          class="navbar__link lg:mr-8"
          :to="localePath({ name: 'categories-slug', params: { slug: item[$t('slug')] } })"
        >
          {{ item[$t('title')] }}
        </nuxt-link>
      </div>

      <nuxt-link class="my-2 py-1" :to="localePath('search')">
        <fa-icon icon="search" class="fa-fw" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import RubricMixin from '@/mixins/RubricMixin'

export default {
  mixins: [RubricMixin],
  methods: {
    navbarAction () {
      const navbar = document.getElementById('navbar')

      if (navbar.className === 'navbar') {
        navbar.className += ' responsive'
      } else {
        navbar.className = 'navbar'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply flex-col hidden;

  &__link {
    @apply relative py-4 text-sm font-bold uppercase;

    &::before {
      @apply absolute bottom-0 left-0 border-b border-2 border-red-600 w-full;
      content: '';
      transform: scaleX(0);
    }
  }

  &__link:hover::before,
  .nuxt-link-exact-active::before {
    transform: scaleX(1);
    transition: .2s;
  }
}

.responsive {
  @apply flex;
}

@screen lg {
  .navbar {
    @apply flex flex-row justify-between items-center;
  }
}
</style>
