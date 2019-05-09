import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
 import authorized from "./components/authorized"
 import auth from "./directives/auth"
import {Button, Layout, Icon, Drawer,Radio,Menu} from "ant-design-vue"
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(auth)
Vue.component("authorized",authorized)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')                                                                     
