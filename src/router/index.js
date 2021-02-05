import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/vender',
    name: 'Vender',
    component: () => import(/* webpackChunkName: "vender" */ '../views/Vender.vue')
  },
  {
    path: '/compras',
    name: 'Compras',
    component: () => import(/* webpackChunkName: "compras" */ '../views/Compras.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
