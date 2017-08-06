<template>
  <div class="nav-tabs">
    <div class="nav-tabs__title" v-for="(item, index) in tabList">
      <div class="nav-tabs__item--title" @click="showSub(item)">
        {{item.name}}
      </div>
      <div class="nav-tabs__sub" v-show="item.actived">
        <div class="nav-tabs__item--sub"  v-for="(sub, index) in item.sub" >
          {{sub.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      tabList: [{
        id: 1,
        name: 'Menu 1',
        actived: false,
        sub: [{
          id: 11,
          name: 'Sub Menu a'
        },{
          id: 12,
          name: 'Sub Menu b'
        }]
      },{
        id: 2,
        name: 'Menu 2',
        actived: false
      },{
        id: 3,
        name: 'Menu 3',
        actived: false
      }]
    }
  },
  methods: {
    showSub(item) {
      item.actived = !item.actived
    }
  }
}
</script>

<style lang="scss">
</style>
