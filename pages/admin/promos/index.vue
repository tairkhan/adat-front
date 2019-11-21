<template>
  <div>
    <base-pagination
      :page-size="rubricPageSize"
      :total="totalRubrics"
      :current-page="rubricPage"
      @current-change="rubricPageChange"
    />

    <promo-table :data="promos" @delete="onDelete" />
  </div>
</template>

<script>
import PromoTable from '@/components/admin/PromoTable'
import BasePagination from '@/components/public/BasePagination'
import PromoMixin from '@/mixins/PromoMixin'

export default {
  layout: 'admin',
  components: {
    PromoTable,
    BasePagination
  },
  mixins: [PromoMixin],
  head () {
    return {
      title: 'Промо'
    }
  },
  created () {
    this.fetchPromos()
  },
  methods: {
    onDelete (payload) {
      this.$confirm('Вы действительно хотите удалить данное промо?')
        .then(() => {
          this.$axios.$delete(`promos/${payload.id}`)
            .then(() => {
              if (this.promos.length === 1 && this.promoPage > 1) {
                this.promoPage -= 1
              }

              this.fetchPromos()
              this.$message({
                type: 'success',
                message: 'Промо удалено'
              })
            })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
