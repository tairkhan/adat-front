export default {
  data () {
    return {
      rubricPage: 1,
      rubricPageSize: 10,
      sortDirection: 'asc'
    }
  },
  computed: {
    rubrics () {
      return this.$store.state.rubrics.results
    },
    totalRubrics () {
      return this.$store.state.rubrics.total
    }
  },
  methods: {
    fetchRubrics () {
      const params = { page: this.rubricPage, page_size: this.rubricPageSize, sort_direction: this.sortDirection }
      this.$store.dispatch('fetch', { params })
    },
    rubricPageChange (page) {
      this.rubricPage = page
      this.fetchRubrics()
    }
  }
}
