import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/todo'
import Menu from '@/components/menu'
import HorizonTree from '@/components/horizon-tree'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
