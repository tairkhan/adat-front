export default {
  data () {
    return {
      isPublic: false,
      promoPage: 1,
      promoPageSize: 10,
      sortDirection: 'asc',
      promos: [],
      totalPromos: 0
    }
  },
  methods: {
    async fetchPromos () {
      const prefix = this.isPublic ? '/public' : ''
      const params = { page: this.promoPage, page_size: this.promoPageSize, sort_direction: this.sortDirection }

      const data = await this.$axios.$get(`promos${prefix}`, { params })
      this.promos = data.results
      this.totalPromos = data.total
    },
    promoPageChange (page) {
      this.promoPage = page
      this.fetchPromos()
    }
  }
}
