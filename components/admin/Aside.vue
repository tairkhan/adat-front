<template>
  <el-menu
    background-color="#00449e"
    text-color="#fff"
    active-text-color="#85ce61"
    :default-active="$route.path"
    unique-opened
    router
  >
    <el-menu-item index="/admin/posts">
      <fa-icon icon="newspaper" class="fa-fw" size="lg" />
      <span class="font-bold">Новости</span>
    </el-menu-item>

    <el-menu-item index="/admin/posts/new">
      <fa-icon icon="plus" class="fa-fw" size="lg" />
      <span class="font-bold">Создать новость</span>
    </el-menu-item>

    <el-menu-item index="/admin/categories">
      <fa-icon icon="layer-group" class="fa-fw" size="lg" />
      <span class="font-bold">Рубрики</span>
    </el-menu-item>

    <el-menu-item index="/admin/categories/new">
      <fa-icon icon="plus" class="fa-fw" size="lg" />
      <span class="font-bold">Создать рубрику</span>
    </el-menu-item>

    <el-menu-item index="" @click="$auth.logout()">
      <fa-icon icon="sign-out-alt" class="fa-fw" size="lg" />
      <span class="font-bold">Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
