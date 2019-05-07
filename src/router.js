import Vue from 'vue'
import Router from 'vue-router'
import notFound from './views/404.vue'
import NProgress from "nprogress";
import "nprogress/nprogress.css"
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
          meta:{icon:"dashboard",title:"仪表盘"},
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
          meta:{icon:"form",title:"表单"},
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
              meta:{title:"分布表单"},
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
      component:notFound

    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path!==from.path){
    NProgress.start();
  }
  
  next()
});
router.afterEach(()=>{
  NProgress.done();
})
export default router;