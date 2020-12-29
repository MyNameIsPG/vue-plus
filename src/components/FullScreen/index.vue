<template>
  <div class="right-menu-item" @click="handleClick" :title="!state.isFullscreen ? '全屏显示' : '取消全屏'">
    <i class="iconfont" :class="!state.isFullscreen ? 'icon-full-screen' : 'icon-cancel-full-screen'"></i>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue'
import screenfull from 'screenfull'
export default defineComponent({
  name: 'FullScreen',
  setup() {
    const state = reactive({ isFullscreen: false })
    function handleClick() {
      state.isFullscreen = !state.isFullscreen
      screenfull.toggle()
    }
    function change() {
      state.isFullscreen = !state.isFullscreen
    }
    onMounted(() => {
      if (screenfull.enabled) {
        screenfull.on('change', change)
      }
    })
    onUnmounted(() => {
      if (screenfull.enabled) {
        screenfull.off('change', change)
      }
    })
    return {
      state,
      handleClick
    }
  }
})
</script>
