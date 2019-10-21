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
  asyncData ({ store, params, error }) {
    return store.dispatch('directories/fetchOne', { name: 'rubrics', id: params.id })
      .then((entity) => {
        return { entity }
      })
      .catch(() => error({ statusCode: 404 }))
  }
}
</script>

<style lang="scss" scoped>

</style>
