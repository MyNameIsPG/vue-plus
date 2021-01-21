<template>
  <div class="app-wrapper" :class="[ !sidebar ? 'hideSidebar' : '']">
    <sidebar :sidebar="sidebar" class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar :sidebar="sidebar"></navbar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
      <right-panel>
        <settings></settings>
      </right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel/index.vue'
import { Sidebar, Navbar, TagsView, AppMain, Settings } from './components'
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain,
    Settings,
    RightPanel
  },
  setup() {
    const store = useStore()
    return {
      sidebar: computed(() => store.state.app.sidebar)
    }
  }
})
</script>

<style lang="sass" scoped>
.app-wrapper
  width: 100%
  height: 100%
  .main-container
    min-height: 100%
    transition: margin-left .28s
    margin-left: 210px
    position: relative
    .fixed-header
      position: fixed
      top: 0
      right: 0
      z-index: 9
      width: calc(100% - 210px)
      transition: width .28s
  &.hideSidebar
    .sidebar-container
      width: 64px!important
    .main-container
      margin-left: 64px
      .fixed-header
        width: calc(100% - 64px)
</style>
