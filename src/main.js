import Vue from 'vue'
import App from './App.vue'


//import "ant-design-vue/lib/button/style"
import router from './router'
import store from './store'
//mport './registerServiceWorker'
import {Button, Layout, Icon, Drawer} from "ant-design-vue"
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
