<template>
  <div class="h-full">
    <basics-table
      :formInline="formInline"
      :columns="columns"
    >
      <template #formInline="data">
        <el-form-item label="审批人">
          <el-input v-model="data.formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="data.formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </template>
    </basics-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'TableOne',
  setup() {
    const formInline = reactive({
      user: '',
      region: ''
    })
    function storeEdit(params) {
      alert(params.name)
    }
    const columns = ref([
      {
        prop: 'name',
        label: '姓名',
        align: 'left',
        width: '200px'
      },
      {
        prop: 'address',
        label: '地址',
        align: 'left'
      },
      {
        prop: 'date',
        label: '时间',
        align: 'left'
      },
      {
        prop: '',
        label: '操作',
        render: (h, params) => {
          return h('div',
            [
              h('a', { onClick: () => { storeEdit(params) }, class: 'text-primary' }, '编辑1'),
              h('a', { class: 'text-primary' }, '编辑')
            ]
          )
        }
      },
      {
        prop: '',
        label: '操作2',
        renderJsx: (params) => (
          <a onClick={ () => storeEdit(params) } class='text-primary'>编辑</a>
        )
      }
    ])

    return {
      formInline,
      columns
    }
  }
})
</script>

<style scoped>

</style>
