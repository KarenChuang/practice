<template>
  <div class="menu-page">
    <nav-menu :tab-list="tabList"></nav-menu>
  </div>
</template>

<script>
import NavMenu from '@/components/menu'

export default {
  name: 'menu',
  data () {
    return {
      tabList: [{
        id: 1,
        name: 'Menu 1',
        actived: false,
        sub: [{
          id: 11,
          name: 'Sub Menu 1-a'
        },{
          id: 12,
          name: 'Sub Menu 1-b'
        },{
          id: 13,
          name: 'Sub Menu 1-c'
        }]
      },{
        id: 2,
        name: 'Menu 2',
        actived: false,
        sub: [{
          id: 21,
          name: 'Sub Menu 2-a'
        }]
      },{
        id: 3,
        name: 'Menu 3',
        actived: false
      }]
    }
  },
  components: {
    NavMenu
  }
}
</script>
