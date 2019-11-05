<template>
  <rubric-form :entity="entity" />
</template>

<script>
import RubricForm from '@/components/admin/RubricForm'

export default {
  layout: 'admin',
  components: {
    RubricForm
  },
  async asyncData ({ $axios, params }) {
    const entity = await $axios.$get(`rubrics/${params.id}`)
    return { entity }
  },
  head () {
    return {
      title: `Рубрики | ${this.entity.title}`
    }
  },
  data () {
    return {
      entity: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
