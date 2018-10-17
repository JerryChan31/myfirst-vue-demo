import Vue from 'vue'
import App from './App.vue'
import VueAwesome from '../node_modules/vue-awesome'
import store from './store/index.js'
import VueRouter from '../node_modules/vue-router'
import router from './config/routes.js'

Vue.config.productionTip = false

Vue.component('v-icon', VueAwesome)

Vue.use(VueRouter)

store.subscribe((mutations, state)=>{
  localStorage.setItem("state", JSON.stringify(state));
})

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initStateFromLocalStorage');
	}
}).$mount('#app')
