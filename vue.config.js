const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'',
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
  devServer:{
    proxy:{
      '/ac':{
        target:"http://archi-casca.micerlabs.com",
        changeOrigin:true,//跨域设置
      },
      '/static':{
        target:"http://archi-casca.micerlabs.com",
        changeOrigin:true,//跨域设置
      }
    }
  }
})
