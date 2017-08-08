<template>
  <div class="nav-menu">
    <div class="nav-menu__item" v-for="(item, index) in tabList">
      <div class="nav-menu__name" @click="showSub(item)">
        {{item.name}}
      </div>
      <div class="nav-menu__sub">
        <div class="nav-menu__sub--name"
             v-for="(sub, index) in item.sub"
             :class="{ 'show': item.actived }">
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
.nav-menu {
  width: 300px;
  &__name {
    padding: 15px;
    background: #e2d1d2;
    &:hover {
      background: darken(#e2d1d2, 10%);
      color: #fff;
    }
  }
  &__sub--name {
    background: #f1e7e7;
    padding-left: 20px;
  }
}
</style>
