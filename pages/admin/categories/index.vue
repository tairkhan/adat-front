<template>
  <div>
    <base-pagination
      :page-size="rubricPageSize"
      :total="totalRubrics"
      :current-page="rubricPage"
      @current-change="rubricPageChange"
    />

    <rubric-table :data="rubrics" @delete="onDelete" />
  </div>
</template>

<script>
import RubricTable from '@/components/admin/RubricTable'
import BasePagination from '@/components/public/BasePagination'

import RubricMixin from '@/mixins/RubricMixin'

export default {
  layout: 'admin',
  components: {
    RubricTable,
    BasePagination
  },
  mixins: [RubricMixin],
  head () {
    return {
      title: 'Рубрики'
    }
  },
  created () {
    this.fetchRubrics()
  },
  methods: {
    onDelete (payload) {
      this.$confirm('Вы действительно хотите удалить данную рубрику?')
        .then(() => {
          this.$axios.$delete(`rubrics/${payload.id}`)
            .then(() => {
              if (this.rubrics.length === 1 && this.rubricPage > 1) {
                this.rubricPage -= 1
              }

              this.fetchRubrics()
              this.$message({
                type: 'success',
                message: 'Удаление завершено'
              })
            })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
