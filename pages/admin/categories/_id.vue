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
  data () {
    return {
      entity: null
    }
  },
  async asyncData ({ app, params, error }) {
    try {
      const entity = await app.$axios.$get(`rubrics/${params.id}`)
      return { entity }
    } catch (err) {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
