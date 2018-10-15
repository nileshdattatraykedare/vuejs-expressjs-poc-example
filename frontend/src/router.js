import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PersonalLoan from './views/PersonalLoan.vue'
import LoanCalculator from './views/LoanCalculator.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
          path: '/personal-loan',
          name: 'personal-loan',
          component: PersonalLoan
      }
      ,
      {
          path: '/loan-calculator',
          name: 'loan-calculator',
          component: LoanCalculator
      }
  ]
})
