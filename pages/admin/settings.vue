<template>
  <settings-form class="lg:w-1/3" />
</template>

<script>
import SettingsForm from '@/components/admin/SettingsForm'

export default {
  layout: 'admin',
  components: {
    SettingsForm
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
