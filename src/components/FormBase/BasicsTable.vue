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
        <el-button type="primary" icon="el-icon-plus">新增</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
      </div>
    </div>
    <div class="h-screen mt-3 shadow-xs flex flex-col h-full overflow-hidden bg-white">
      <div class="flex flex-col h-full overflow-hidden">
        <div class="h-screen overflow-hidden">
          <el-table
            :data="tableData"
            height="100%"
            style="width: 100%">
            <el-table-column
              v-for="(column, index) in columns"
              :key="index"
              :prop="column.prop"
              :label="column.label"
              :align="column.align"
              :width="column.width ? column.width : ''"
            ></el-table-column>
          </el-table>
        </div>
        <div class="flex-1 flex justify-center p-3">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BasicsTable',
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
    const currentPage = ref(4)
    function handleSizeChange(val) {
      console.log(val)
    }
    function handleCurrentChange(val) {
      console.log(val)
    }
    return {
      tableData,
      currentPage,
      handleSizeChange,
      handleCurrentChange,
      query
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
