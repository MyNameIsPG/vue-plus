<template>
  <el-dropdown size="small" trigger="click">
    <div class="dropdown-container">
      <i class="iconfont icon-language"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languageOptions" :key="item.value">
          <div class="center">{{item.label}}</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LanguageSelect',
  data() {
    return {
      languageOptions: [
        { label: '中文简体', value: 'zh' },
        { label: 'English', value: 'en' }
      ]
    }
  }
}
</script>
