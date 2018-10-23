import Vue from 'vue'
import VueRouter from 'vue-router'

import TheLeftColumn from '../components/TheLeftColumn.vue'
import TheBaseList from '../components/TheBaseList.vue'
import LoginPage from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/list',
    components: {
      default: TheBaseList,
      sidebar: TheLeftColumn
    }
  },
  {
    path: '/',
    redirect: '/list'
  }
]

const router = new VueRouter({
  routes
})

export default router
