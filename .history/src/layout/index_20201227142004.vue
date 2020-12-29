<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
      <right-panel></right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from "@/components/RightPanel/index.vue";
import { Sidebar, Navbar, TagsView, AppMain, Settings } from "./components";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain,
    Settings,
    RightPanel
  }
};
</script>

<style lang="sass" scoped>
.app-wrapper
  width: 100%;
  height: 100%;
  .main-container
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 210px;
    position: relative;
    .fixed-header
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - 210px);
      transition: width .28s;
</style>
