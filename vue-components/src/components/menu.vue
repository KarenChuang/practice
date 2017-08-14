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
  name: 'nav-menu',
  props: {
    tabList: Array
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
$bg-color: #e2d1d2;

.nav-menu {
  width: 300px;
  &__name {
    cursor: pointer;
    padding: 15px;
    background: $bg-color;
    transition: .2s;
    &:hover {
      background: darken($bg-color, 15%);
      color: #fff;
    }
  }
  &__sub--name {
    background: lighten($bg-color, 5%);
    padding: 15px;
    text-indent: 20px;
    &:hover {
      cursor: pointer;
      background: darken($bg-color, 5%);
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
