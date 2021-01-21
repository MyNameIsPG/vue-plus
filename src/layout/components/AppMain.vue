<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppMain',
  setup() {
    const route = useRoute()
    return {
      key: computed(() => route.path)
    }
  }
})
</script>

<style>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<style lang="sass" scoped>
.app-main
  padding-top: 84px
  width: 100%
  position: relative
  overflow: hidden
  height: 100vh
  box-sizing: border-box
  background: rgb(232, 235, 241)
</style>
