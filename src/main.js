import Vue from 'vue'
import App from './App.vue'
import VueAwesome from '../node_modules/vue-awesome'
import store from './store/index.js'
Vue.config.productionTip = false

Vue.component('v-icon', VueAwesome)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
