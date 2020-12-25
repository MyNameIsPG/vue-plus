<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
        <tags-view></tags-view>
      </div>
      <section class="app-main">
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>啊是大<br>
        1111
      </section>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, TagsView } from "./components";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    TagsView,
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
    .app-main
      padding-top: 84px;
      width: 100%;
      position: relative;
      overflow: hidden;
      min-height: calc(100vh - 84px);
</style>
