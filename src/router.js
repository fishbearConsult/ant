import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
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
          component:{render:h=>h("router-view")},
          children:[
            {
              path:"/dashboard",
              redirect:"/dashboard/analysis"
            },
            {
              path:"/dashboard/analysis",
              name:"analysis",
              component:()=>import(/* webpackChunkName: "dashboard" */ "./views/dashboard/analysis")
            }
          ]
        },
        {
          path:"/form",
          name:"form",
          component:{render:h=>h("router-view")},
          children:[
            {
              path:"/form",
              redirect:"/form/basicForm"
            },
            {
              path:"/form/basicForm",
              name:"basicForm",
              component:()=>import(/* webpackChunkName: "form" */ "./views/form/basicForm")
            }
          ]
        }
      ]
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"*",
      name:"404",

    }
  ]
})
