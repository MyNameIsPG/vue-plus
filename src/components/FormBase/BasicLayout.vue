<template>
  <div class="h-full p-3 box-border flex flex-col">
    <div class="bg-white form-inline-search flex shadow-xs">
      <el-form :inline="true" :model="formInline" class="flex-1">
        <slot name="formInline" :formInline="formInline"></slot>
        <el-form-item>
          <el-button type="primary" @click="query" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" icon="el-icon-plus" @click="addBtn">新增</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <div class="h-screen mt-3 shadow-xs flex flex-col h-full overflow-hidden bg-white">
      <tables
        :columns="columns"
        :tableData="tableData"
      ></tables>
    </div>

    <el-dialog
      v-el-drag-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
    >
      <span>这是一段信息</span>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Tables from '../Tbales'
import elDragDialog from '@/directive/el-drag-dialog'

export default defineComponent({
  name: 'BasicLayout',
  directives: {
    elDragDialog
  },
  components: {
    Tables
  },
  props: {
    formInline: Object,
    columns: Array
  },
  setup(props) {
    const tableData = ref([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }])
    function query() {
      console.log(props.formInline)
    }
    const dialogVisible = ref(false)
    function addBtn() {
      dialogVisible.value = true
    }
    return {
      tableData,
      query,
      addBtn,
      dialogVisible
    }
  }
})
</script>

<style scoped lang="sass">
.form-inline-search
  padding: 12px
  box-sizing: border-box
  /deep/.el-form--inline
    .el-form-item
      margin-bottom: 0px
</style>
