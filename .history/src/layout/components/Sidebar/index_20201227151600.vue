<template>
  <div class="sidebar-container">
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      router
      active-text-color="#1890ff"
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tinymce">富文本编辑器</el-menu-item>
          <el-menu-item index="/markdown">Markdown</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
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
