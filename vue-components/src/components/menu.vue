<template>
  <div class="nav-menu">
    <div class="nav-menu__item" v-for="(item, index) in tabList">
      <div class="nav-menu__name" @click="showSub(item)">
        {{item.name}}
      </div>
      <div class="nav-menu__sub" :style="classObject(item)">
        <div class="nav-menu__sub--name"
             v-for="(sub, index) in item.sub">
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
  methods: {
    classObject(item) {
      if(item.sub && item.actived) {
        return {
          'height': 50 * item.sub.length + 'px'
        }
      }
    },
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
    cursor: pointer;
    padding: 15px;
    background: #e2d1d2;
    transition: .2s;
    &:hover {
      background: darken(#e2d1d2, 15%);
      color: #fff;
    }
  }
  &__sub--name {
    background: #f1e7e7;
    padding: 15px;
    text-indent: 20px;
    &:hover {
      cursor: pointer;
      background: darken(#f1e7e7, 5%);
      color: #fff;
    }
  }
  .nav-menu__sub {
    height: 0;
    transition: 0.3s;
    overflow: hidden;
    &--name {
      transition: .2s;
    }
  }
  .nav-menu__sub--show {
    transition: 0.3s;
  }
}
</style>
