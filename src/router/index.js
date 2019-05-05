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
import PDF from '@/vues/PDF'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/PDF',
      name: 'PDF',
      component: PDF
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

// router.beforeEach((to, from, next) => {
//   debugger
//   if (to.meta.requireAuth || true) {
//     debugger
//     if (store.state.show || this.$store.state.show) {
//       debugger
//       next()
//     } else {
//       next('/')
//     }
//   } else {
//     next()
//   }
// })



// const whiteList = ['/error', '/register/regindex', '/register/userauthent',  '/register/submit'] // 路由白名单
// vueRouter.beforeEach(function(to,from,next){
//     console.log("进入守卫");
//     if (userInfo.user_id>0){
//         console.log("登录成功");
//         next();   //记得当所有程序执行完毕后要进行next()，不然是无法继续进行的;
//     }else{
//         console.log("登录失败");
//         getUserInfo.then(res => {
//             if(res){
//                 if (res.user_id){
//                     if (res.status == 4) {
//                         //账号冻结
//                         next({ path: '/error', replace: true, query: { noGoBack: true } })
//                     }
//                     if (res.status == 3) {
//                         //认证审核中
//                         next({ path: '/register/submit', replace: true, query: { noGoBack: true } })
//                     }
//                     if (res.status != 1 && res.status != 3) {
//                         if (!res.mobile ) {
//                             next({ path: '/register/regindex', replace: true, query: { noGoBack: true }})
//                         } else {
//                             //绑定完手机号了
//                             next({ path: '/register/userauthent', replace: true, query: { noGoBack: true } })
//                         }
//                     }
//                     next();  //记得当所有程序执行完毕后要进行next()，不然是无法继续进行的;
//                 }else{
//                     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//                         next();  //记得当所有程序执行完毕后要进行next()，不然是无法继续进行的;
//                     }else{
//                         next({ path: '/register/regindex', replace: true, query: { noGoBack: true }})
//                     } 
//                 }
                
//             }else{
                
//                 }
            
            
//         }).catch(()=>{
//             //跳转失败页面
//             next({ path: '/error', replace: true, query: { noGoBack: true }})
//         })
//     }
    
    
// });
