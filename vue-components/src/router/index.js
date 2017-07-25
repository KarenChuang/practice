import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Tabs from '@/components/Tabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
  ]
})
