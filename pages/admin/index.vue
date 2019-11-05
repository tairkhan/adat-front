<template>
  <login-form class="mt-32 border bg-white pt-4 px-4 rounded-lg" style="width: 24rem;" />
</template>

<script>
import LoginForm from '@/components/admin/LoginForm'

export default {
  layout: 'non-auth',
  components: {
    LoginForm
  },
  head () {
    return {
      title: 'Войти'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
