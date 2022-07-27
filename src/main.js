/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wang
 * @Date: 2022-07-27 15:33:16
 * @LastEditors: Wang
 * @LastEditTime: 2022-07-27 16:54:49
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
