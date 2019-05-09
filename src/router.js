import Vue from 'vue'
import Router from 'vue-router'
import notFound from './views/404.vue'
import forbid from './views/forbid.vue'
import NProgress from "nprogress";
import findLast from "lodash/findLast"
import "nprogress/nprogress.css"
import {Notification} from "ant-design-vue"
import {checkAuth,isLogin} from './utils/auth'
Vue.use(Router)

var router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      hideInMenu:true,
      
      component:()=> import(/* webpackChunkName: "layout" */ './layout/userLayout.vue'),
      children:[
       
        {
          path:"/user/login",
          name:"login",
          component:()=> import(/* webpackChunkName: "user" */ './views/user/login.vue')
        },
        {
          path:"/user/register",
          name:"register",
          component:()=> import(/* webpackChunkName: "user" */ './views/user/register.vue')
        },
        {
          path:"/user",
          redirect:"/user/login"
        }
      ]
    },
    {
      path: '/',
      component:()=>import(/* webpackChunkName: "layout" */ "./layout/basicLayout.vue"),
      children:[
        {
          path:"/",
          redirect:"/dashboard/analysis"
        },
        {
          path:"/dashboard",
          name:"dashboard",
          meta:{icon:"dashboard",title:"仪表盘",auth:["admin","user"]},
          component:{render:h=>h("router-view")},
          children:[
            {
              path:"/dashboard",
              redirect:"/dashboard/analysis"
            },
            {
              path:"/dashboard/analysis",
              name:"analysis",
              meta:{title:"分析页"},
              component:()=>import(/* webpackChunkName: "dashboard" */ "./views/dashboard/analysis")
            }
          ]
        },
        {
          path:"/form",
          name:"form",
          meta:{icon:"form",title:"表单",auth:["admin"],},
          component:{render:h=>h("router-view")},
          children:[
            {
              path:"/form",
              redirect:"/form/basicForm"
            },
            {
              path:"/form/basicForm",
              name:"basicForm",
              meta:{title:"基础表单"},
              component:()=>import(/* webpackChunkName: "form" */ "./views/form/basicForm")
            },
            {
              path:"/form/stepForm",
              name:"stepForm",
              meta:{title:"分步表单"},
              hideChildren:true,
              component:()=>import(/* webpackChunkName: "form" */ "./views/form/stepForm/index.vue"),
              children:[
                {
                  path:"/form/stepForm",
                  redirect:"/form/stepForm/info"
                },
                {
                  path:"/form/stepForm/info",
                  name:"info",
                  component:()=>import(/* webpackChunkName: "form" */ "./views/form/stepForm/step1"),
                },
                {
                  path:"/form/stepForm/confirm",
                  name:"confirm",
                  component:()=>import(/* webpackChunkName: "form" */ "./views/form/stepForm/step2"),
                }
              ]
            }
          ]
        }
      ]
      
    },
    {
      path:"*",
      hideInMenu:true,
      name:"404",
      component:forbid

    },
    {
      path:"/403",
      hideInMenu:true,
      name:"403",
      component:notFound

    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path!==from.path){
    NProgress.start();
  }
  
  const record=findLast(to.matched,record=>record.meta.auth);
  
  if(record && ! checkAuth(record.meta.auth)){
   
    if(!isLogin() && to.path!=="/user/login"){
      next({
        path:"/user/login"
      })
    }else{
     
      Notification.error({
        message: '403',
        description: '请联系管理员申请相关操作权限',
      });
      next({
        path:"/403"
      })
    }
  }
  next()
});
router.afterEach(()=>{
  NProgress.done();
})
export default router;