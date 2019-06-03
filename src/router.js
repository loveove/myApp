import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
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
      path: '/livegame',
      name: 'classification',
      component: () => import(/* webpackChunkName: "about" */ './views/Classification.vue')

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')

    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')

    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')

    },
    {
      path: '/membercenter',
      name: 'membercenter',
      component: () => import(/* webpackChunkName: "about" */ './views/MemberCenter.vue')

    },
    {
      path: '/querybalance',
      name: 'querybalance',
      component: () => import(/* webpackChunkName: "about" */ './components/QueryBalance.vue')

    },
    {
      path: '/withdrawarea',
      name: 'withdrawarea',
      component: () => import(/* webpackChunkName: "about" */ './components/WithdrawArea.vue')

    },
    {
      path: '/platformtransfer',
      name: 'platformtransfer',
      component: () => import(/* webpackChunkName: "about" */ './components/PlatformTransfer.vue')

    },
    // {
    //   path: '/depositearea',
    //   name: 'depositearea',
    //   component: () => import(/* webpackChunkName: "about" */ './components/DepositeArea.vue')

    // }
    {
      path: '/userinfo',
      name: 'userinfo',
      component: () => import(/* webpackChunkName: "about" */ './components/UserInfo.vue')

    },
    {
      path: '/historyrecord',
      name: 'historyrecord',
      component: () => import(/* webpackChunkName: "about" */ './components/HistoryRecord.vue')

    }

  ]
})
