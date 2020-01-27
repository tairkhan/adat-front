export default {
  data () {
    return {
      page: 1,
      pageSize: 9,
      sortDirection: 'asc'
    }
  },
  computed: {
    results () {
      return this.$store.state.data.results
    },
    total () {
      return this.$store.state.data.total
    }
  },
  methods: {
    fetch () {
      const params = { page: this.page, page_size: this.pageSize, sort_direction: this.sortDirection }
      this.$store.dispatch('fetch', { params })
    },
    pageChange (page) {
      this.page = page
      this.fetch()
    }
  }
}
