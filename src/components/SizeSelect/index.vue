<template>
  <el-dropdown size="small" trigger="click" @command="handleSetSize">
    <div class="dropdown-container">
      <el-tooltip class="item" effect="dark" content="布局大小" placement="bottom">
        <i class="iconfont icon-filter"></i>
      </el-tooltip>
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
      this.$message({
        message: '布局大小切换成功',
        type: 'success'
      })
      this.$nextTick(() => {
        this.$router.replace({
          path: '/home'
        })
      })
    }
  }
}
</script>
