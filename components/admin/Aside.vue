<template>
  <el-menu
    background-color="#00449e"
    text-color="#fff"
    active-text-color="#85ce61"
    :default-active="$route.path"
    unique-opened
    router
  >
    <el-submenu index="/admin/posts">
      <template slot="title">
        <fa-icon icon="newspaper" class="fa-fw" size="lg" />
        <span class="font-bold">Новости</span>
      </template>

      <el-menu-item index="/admin/posts">
        <span class="font-bold">Все новости</span>
      </el-menu-item>

      <el-menu-item index="/admin/posts/new">
        <span class="font-bold">Создать новость</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="/admin/categories">
      <template slot="title">
        <fa-icon icon="layer-group" class="fa-fw" size="lg" />
        <span class="font-bold">Рубрики</span>
      </template>

      <el-menu-item index="/admin/categories">
        <span class="font-bold">Все рубрики</span>
      </el-menu-item>

      <el-menu-item index="/admin/categories/new">
        <span class="font-bold">Создать рубрику</span>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="/admin/promos">
      <template slot="title">
        <fa-icon icon="ad" class="fa-fw" size="lg" />
        <span class="font-bold">Промо</span>
      </template>

      <el-menu-item index="/admin/promos">
        <span class="font-bold">Все промо</span>
      </el-menu-item>

      <el-menu-item index="/admin/promos/new">
        <span class="font-bold">Создать промо</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="/admin/settings">
      <fa-icon icon="cog" class="fa-fw" size="lg" />
      <span class="font-bold">Настройки</span>
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
