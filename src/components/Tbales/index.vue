<template>
  <div class="flex flex-col h-full overflow-hidden">
    <div class="h-screen overflow-hidden">
      <el-table
        :data="tableData"
        height="100%"
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
          :width="item.width ? item.width : ''"
        >
          <template #default="scope">
            <span v-if="!item.render">{{scope.row[item.prop]}}</span>
            <table-render v-if="item.render" :row="item" :scope="scope"></table-render>
            <table-render-jsx v-if="item.renderJsx" :row="item" :scope="scope"></table-render-jsx>
          </template>
        </el-table-column>
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
</template>

<script>
import { defineComponent, ref } from 'vue'
import TableRender from '../Tbales/TableRender'
import TableRenderJsx from '../Tbales/TableRenderJsx'

export default defineComponent({
  name: 'Tables',
  components: {
    TableRender,
    TableRenderJsx
  },
  props: {
    columns: Object,
    tableData: Array
  },
  setup() {
    function handleSizeChange(val) {
      console.log(val)
    }
    function handleCurrentChange(val) {
      console.log(val)
    }
    const currentPage = ref(1)
    return {
      handleSizeChange,
      handleCurrentChange,
      currentPage
    }
  }
})
</script>

<style scoped>

</style>
