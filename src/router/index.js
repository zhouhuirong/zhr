import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/vues/HelloVue'
import Main from '@/vues/Main'
import Upload from '@/vues/Upload'
import QRCode from '@/vues/QRCode'
import Carousel from '@/vues/Carousel'
import StoreTest from '@/vues/StoreTest'
import Excel from '@/vues/Excel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/day01',
          name: 'HelloVue',
          component: HelloVue
        },
        {
          path: '/Upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: '/QRCode',
          name: 'QRCode',
          component: QRCode
        },
        {
          path: '/Carousel',
          name: 'Carousel',
          component: Carousel
        },
        {
          path: '/StoreTest',
          name: 'StoreTest',
          component: StoreTest
        },
        {
          path: '/Excel',
          name: 'Excel',
          component: Excel
        }
      ]
    }
  ]
})
