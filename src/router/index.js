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
import Login from '@/vues/Login'
import Download from '@/vues/Download'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/home',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            requireAuth: true
          }
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
        },
        {
          path: '/Download',
          name: 'Download',
          component: Download
        }
      ]
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (false) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})