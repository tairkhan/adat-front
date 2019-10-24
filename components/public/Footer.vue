<template>
  <div class="footer">
    © {{ new Date().getFullYear() }}
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-black text-gray-500;
}
</style>
