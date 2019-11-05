<template>
  <post-form />
</template>

<script>
import PostForm from '@/components/admin/PostForm'

export default {
  layout: 'admin',
  components: {
    PostForm
  },
  head () {
    return {
      title: 'Создать новость'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
