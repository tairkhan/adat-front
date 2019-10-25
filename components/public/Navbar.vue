<template>
  <div class="navbar">
    <nuxt-link class="navbar__link" to="/">
      Главная
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" to="/all">
      Все статьи
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" to="/politics">
      Политика
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" to="/economics">
      Экономика
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" to="/videos">
      Видео
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" to="/world">
      В мире
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  &__link {
    @apply relative inline-block py-4 mr-8 text-sm font-bold uppercase;

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

</style>
