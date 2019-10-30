<template>
  <div>
    <base-pagination
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="currentChange"
    />

    <rubric-table :data="results" @delete="onDelete" />
  </div>
</template>

<script>
import RubricTable from '@/components/admin/RubricTable'
import BasePagination from '@/components/admin/BasePagination'

export default {
  layout: 'admin',
  components: {
    RubricTable,
    BasePagination
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    results () {
      return this.$store.state.directories.rubrics.results
    },
    total () {
      return this.$store.state.directories.rubrics.total
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      const params = { page: this.currentPage, page_size: this.pageSize, sort_direction: 'asc' }
      this.$store.dispatch('directories/fetch', { name: 'rubrics', params })
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.fetch()
    },
    onDelete (payload) {
      this.$confirm('Вы действительно хотите удалить данную рубрику?')
        .then(() => {
          this.$store.dispatch('directories/delete', { name: 'rubrics', id: payload.id })
            .then(() => {
              if (this.results.length === 1 && this.currentPage > 1) {
                this.currentPage -= 1
              }

              this.fetch()
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
