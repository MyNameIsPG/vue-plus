export default [
  {
    path: '/home',
    icon: 'el-icon-menu',
    name: '首页',
    affix: true
  },
  {
    path: 'components',
    icon: 'el-icon-location',
    name: '组件',
    children: [
      {
        path: '/tinymce',
        icon: 'el-icon-menu',
        name: '富文本编辑器'
      },
      {
        path: '/markdown',
        icon: 'el-icon-menu',
        name: 'Markdown'
      }
    ]
  },
  {
    path: '1',
    icon: 'el-icon-menu',
    name: '1 级别',
    children: [
      {
        path: '/1-1',
        icon: 'el-icon-menu',
        name: '1-1 级别'
      },
      {
        path: '/1-2',
        icon: 'el-icon-menu',
        name: '1-2 级别',
        children: [
          {
            path: '/1-2-1',
            icon: 'el-icon-menu',
            name: '1-2-1 级别'
          }
        ]
      },
      {
        path: '/1-3',
        icon: 'el-icon-menu',
        name: '1-3 级别'
      }
    ]
  }
]
