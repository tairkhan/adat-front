<template>
  <rubric-form class="lg:w-1/3" />
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
