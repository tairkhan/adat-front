<template>
  <div>
    <base-pagination
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="currentChange"
    />

    <post-table :data="results" @delete="onDelete" />
  </div>
</template>

<script>
import PostTable from '@/components/admin/PostTable'
import BasePagination from '@/components/public/BasePagination'

export default {
  layout: 'admin',
  components: {
    PostTable,
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
      return this.$store.state.directories.posts.results
    },
    total () {
      return this.$store.state.directories.posts.total
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      const params = { page: this.currentPage, page_size: this.pageSize }
      this.$store.dispatch('directories/fetch', { name: 'posts', params })
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.fetch()
    },
    onDelete (payload) {
      this.$confirm('Вы действительно хотите удалить данную новость?')
        .then(() => {
          this.$store.dispatch('directories/delete', { name: 'posts', id: payload.id })
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
