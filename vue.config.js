const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  chainWebpack: config => {
    //设置标题  默认不设置的话是项目名字
    config.plugin('html').tap(args => {
      args[0].title = "Archi&Casca"
      return args
    })
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    proxy: {
      '/ac': {
        target: "http://archi-casca.micerlabs.com",
        changeOrigin: true,//跨域设置
      },
      '/static': {
        target: "http://archi-casca.micerlabs.com",
        changeOrigin: true,//跨域设置
      }
    }
  }
})
