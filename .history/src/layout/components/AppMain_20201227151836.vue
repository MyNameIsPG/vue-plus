<template>
  <section class="app-main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
};
</script>

<style lang="sass" scoped>
.app-main
  padding-top: 84px;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 84px);
</style>
