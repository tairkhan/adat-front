export default {
  computed: {
    rubrics () {
      return this.$store.state.directories.rubrics.results
    }
  },
  methods: {
    fetchRubrics () {
      const params = { page_size: 8, sort_direction: 'asc' }
      this.$store.dispatch('directories/fetch', { name: 'rubrics', params })
    }
  }
}
