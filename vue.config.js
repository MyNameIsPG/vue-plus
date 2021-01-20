const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    open: true,
    port: 3006,
    proxy: {
      '^/api': {
        target: 'https://www.fastmock.site/mock/b880090f14e642ee760e7fd656d68d6d/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    name: 'vue Element Admin',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
