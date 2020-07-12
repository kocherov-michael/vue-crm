import Vue from 'vue'
import VueRouter from 'vue-router'
// импорт, если страница статистически загружается
// для lazyload такой импорт ненужен
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
     // для использования лейаута используем meta
    meta: {layout: 'main'},
    // подключение статистической страницы
    // component: Home
    // подключение с использованием lazy load
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {layout: 'main'},
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'recordg',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
