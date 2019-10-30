export default {
  computed: {
    rubrics () {
      return this.$store.state.directories.rubrics.results
    }
  }
}
