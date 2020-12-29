<template>
  <el-dropdown size="small" @command="handleSetSize">
    <div class="dropdown-container">
      <i class="iconfont icon-filter"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in sizeOptions" :key="item.value" :command="item.value">
          <div class="center">{{item.label}}</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: 'SizeSelect',
  data() {
    return {
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ]
    }
  },
  methods: {
    handleSetSize(size) {
      this.$ELEMENT.size = size
      localStorage.setItem('size', size)
      this.$nextTick(() => {
        this.$router.replace({
          path: '/home'
        })
      })
    }
  }
}
</script>
