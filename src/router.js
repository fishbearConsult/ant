import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RenderRouterView from "./components/renderRouterView"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      component:RenderRouterView,
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
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
