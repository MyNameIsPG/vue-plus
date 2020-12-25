<template>
  <div class="sidebar-container">
    Sidebar
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style lang="sass" scoped>
.sidebar-container
  transition: width .28s;
  width: 210px!important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
</style>