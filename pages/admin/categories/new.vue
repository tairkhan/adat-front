<template>
  <rubric-form />
</template>

<script>
import RubricForm from '@/components/admin/RubricForm'

export default {
  layout: 'admin',
  components: {
    RubricForm
  },
  head () {
    return {
      title: 'Создать рубрику'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
