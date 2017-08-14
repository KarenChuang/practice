import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/todo'
import Menu from '@/pages/menu'
import HorizonTree from '@/pages/horizon-tree'
import Homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/horizon-tree',
      name: 'horizon-tree',
      component: HorizonTree
    },
  ]
})
