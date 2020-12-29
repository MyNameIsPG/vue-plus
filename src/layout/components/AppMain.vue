<template>
  <section class="app-main">
<!--    <keep-alive>-->
<!--      <router-view></router-view>-->
<!--    </keep-alive>-->
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="sass" scoped>
.app-main
  padding-top: 84px
  width: 100%
  position: relative
  overflow: hidden
  height: 100vh
  box-sizing: border-box
</style>
