<template>
  <div class="text-center" style="font-size: 10rem;">
    {{ statusCode }}
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.message
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      let message
      switch (this.statusCode) {
        case 404:
          message = 'Страница не найдена'
          break
        default:
          message = this.error.message || 'Ошибка'
          break
      }
      return message
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
