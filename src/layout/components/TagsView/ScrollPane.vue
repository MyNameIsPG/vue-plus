<template>
  <el-scrollbar
    :vertical="false"
    style="white-space: nowrap; position: relative; overflow: hidden; width: 100%;"
  >
    <slot></slot>
  </el-scrollbar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScrollPane'
})
</script>
