<template>
  <div>
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="item.icon"></i>
      <template #title>{{item.name}}</template>
    </el-menu-item>
    <el-submenu :index="item.path" v-else>
      <template #title>
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </template>
      <el-menu-item-group>
        <sidebar-item v-for="(menu,index) in item.children" :key="index" :item="menu"></sidebar-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: Object
  }
})
</script>

<style scoped></style>
