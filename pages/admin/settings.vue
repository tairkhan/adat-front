<template>
  <password-form class="lg:w-1/3 mb-10" />
</template>

<script>
import PasswordForm from '@/components/admin/PasswordForm'

export default {
  layout: 'admin',
  components: {
    PasswordForm
  },
  head () {
    return {
      title: 'Настройки'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
