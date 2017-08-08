import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/todo'
import Menu from '@/components/menu'

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
  ]
})
