<template>
  <login-form class="mt-48" style="width: 24rem;" />
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
