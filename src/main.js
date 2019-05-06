import Vue from 'vue'
import App from './App.vue'


//import "ant-design-vue/lib/button/style"
import router from './router'
import store from './store'
//mport './registerServiceWorker'
import {Button} from "ant-design-vue"
Vue.config.productionTip = false
Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
