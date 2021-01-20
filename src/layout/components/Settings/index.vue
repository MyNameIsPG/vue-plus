<template>
  <div class="drawer-container">
    <h3 class="drawer-title">系统布局配置</h3>

    <div class="drawer-item">
      <span>主题色</span>
      <theme-picker
        style="float: right;height: 26px;margin: -3px 8px 0 0;"
        @change="themeChange"
      />
    </div>

    <div class="drawer-item">
      <span>开启 Tags-View</span>
      <el-switch v-model="tagsView" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>固定 Header</span>
      <el-switch v-model="fixedHeader" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>侧边栏 Logo</span>
      <el-switch v-model="sidebarLogo" class="drawer-switch" />
    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Settings',
  components: {
    ThemePicker
  },
  setup() {
    const tagsView = ref(false)
    const fixedHeader = ref(false)
    const sidebarLogo = ref(false)
    function themeChange() {
      console.log('进来了')
    }
    return {
      tagsView,
      fixedHeader,
      sidebarLogo,
      themeChange
    }
  }
})
</script>

<style lang="sass" scoped>
.drawer-container
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  .drawer-item
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  .drawer-switch
    float: right
</style>
