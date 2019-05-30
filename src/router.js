import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: () => import('./views/Chapter.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated) {
          next()
        } else {
          next('/')
        }
      }
    }
  ]
})
