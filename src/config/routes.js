import Vue from 'vue'
import VueRouter from 'vue-router'

import LeftColumn from '../components/LeftColumn.vue'
import BaseList from '../components/BaseList.vue'
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
      default: BaseList,
      sidebar: LeftColumn
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
