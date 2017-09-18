import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import Docs from '@/components/docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    }, {
      path: '/examples',
      name: 'Examples',
      component: Hello
    }, {
      path: '/docs',
      name: 'Docs',
      component: Docs
    }
  ]
})
