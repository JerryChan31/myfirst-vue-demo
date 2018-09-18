import Vue from 'vue'
import App from './App.vue'
import VueAwesome from '../node_modules/vue-awesome'
Vue.config.productionTip = false

Vue.component('v-icon', VueAwesome)

new Vue({
  render: h => h(App)
}).$mount('#app')
