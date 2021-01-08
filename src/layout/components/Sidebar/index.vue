<template>
  <div class="sidebar-container">
    <el-menu
      :uniqueOpened="true"
      :collapse="!sidebar"
      background-color="#304156"
      :collapse-transition="false"
      text-color="#fff"
      router
      :default-active="activeMenu"
      active-text-color="#1890ff"
    >
      <sidebar-item v-for="(menu, index) in menus" :key="index" :item="menu"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'
import menus from '../../menus'
export default {
  name: 'Sidebar',
  props: {
    sidebar: Boolean
  },
  components: {
    SidebarItem
  },
  data() {
    return {
      menus: menus
    }
  },
  computed: {
    activeMenu() {
      return this.$route.path
    }
  }
}
</script>

<style lang="sass" scoped>
.sidebar-container
  transition: width .28s
  width: 210px!important
  background-color: #304156
  height: 100%
  position: fixed
  font-size: 0
  top: 0
  bottom: 0
  left: 0
  z-index: 1001
  overflow: hidden
</style>
