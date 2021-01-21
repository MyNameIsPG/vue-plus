<template>
  <div>
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="item.icon"></i>
      <template #title v-show="sidebar">{{item.name}}</template>
    </el-menu-item>
    <el-submenu :index="item.path" v-else>
      <template #title>
        <i :class="item.icon"></i>
        <span v-show="sidebar">{{item.name}}</span>
      </template>
      <el-menu-item-group>
        <sidebar-item v-for="(menu,index) in item.children" :key="index" :item="menu" :sidebar="sidebar"></sidebar-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: Object,
    sidebar: Boolean
  }
})
</script>

<style scoped></style>
