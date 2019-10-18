<template>
  <login-form style="width: 24rem;" />
</template>

<script>
import LoginForm from '@/components/admin/LoginForm'

export default {
  layout: 'non-auth',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>

</style>
