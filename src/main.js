// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'//element
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'//图形化
import './assets/iconfont/iconfont.css'//阿里图标
import axios from 'axios' //axios异步请求
import QRCode from 'qrcodejs2' //二维码
import VueCookie from 'vue-cookies' //cookie
import store from './store' //vuex 数据存储
import Dialog from '@/vues/Dialog' //导入组件（并在APP.vue中使用了）
import excel from '@/plugins/excel.js' //导出excel表格
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$QRCode = QRCode

// 注册全局组件
const components = {
  install: function (Vue) {
    Vue.component('Dialog', Dialog)
  }
}

Vue.use(ElementUI)
Vue.use(VueCookie)
//生产环境时自动设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(components)
Vue.use(excel)

// Vue.prototype.$eventHub= Vue.prototype.$eventHub || new Vue()
Vue.prototype.$eventHub = new Vue()



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  render: h => h(App)
}).$mount('#app')
