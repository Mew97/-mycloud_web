import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Test from '@/views/Test'
import Registered from '@/views/Registered'
import Security from '@/views/Security'
import VerifyPhone from '@/components/VerifyPhone'
import UpdatePwd from '@/components/UpdatePwd'
import FileUpLoad from '@/components/Section/FileUpSec'
import FileList from '@/components/Section/FileListSec'
import FileRecycle from '@/components/Section/FileRecycleSec'

Vue.use(Router);

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
        requireAuth: true,
      },
      component: Home,
      children: [
        {path:'fileUpLoad',name:'FileUpLoad',component:FileUpLoad},
        {path:'fileList',name:'FileList',component:FileList},
        {path:'fileRecycle',name:'FileRecycle',component:FileRecycle},
        //添加默认主页显示
        {path:'',redirect:'fileUpLoad'}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/Security',
      name: 'Security',
      component: Security,
      children:[
        {path: '', name:'VerifyPhone', component: VerifyPhone},
        {path: 'updatePwd',name:'UpdatePwd', component: UpdatePwd}
      ]

    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
  ]
});

// router.beforeEach((to, from, next)=>{
//   // 判断该路由是否需要登录权限
//   if (to.meta.requireAuth) {
//     //console.log($cookies.get("userInfo"));
//     if ($cookies.get("userInfo")){
//       next()
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// });
router.beforeEach((to, from, next) => {
  console.log('路由拦截')
  if (['/login','/registered','/Security'].indexOf(to.path) !== -1) {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});


export default router;


