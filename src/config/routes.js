import Vue from 'vue'
import VueRouter from 'vue-router'

import LeftColumn from '../components/LeftColumn.vue'
import BaseList from '../components/BaseList.vue'
import LoginPage from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/list",
        component: BaseList
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;