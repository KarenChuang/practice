<template>
  <div id="app">
    <nav>
      <router-link to="todo" :class="{ 'actived': $route.name === 'todo' }">Todo</router-link>
      <router-link to="menu" :class="{ 'actived': $route.name === 'menu' }">Menu</router-link>
    </nav>
    <router-view class="tab-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "~@/styles/reset.scss";

$sidebar-width: 150px;
$sidebar-bg-color: #E49EA3;

@mixin actived {
  padding-left: 20px;
  background: darken($sidebar-bg-color, 5%);
}

#app {
  height: 100%;
}

nav {
  float: left;
  width: $sidebar-width;
  background: $sidebar-bg-color;
  height: 100%;
  a {
    display: block;
    padding: 10px;
    color: #fff;
    transition: .2s;
    &:hover {
      @include actived;
    }
  }
  .actived {
    @include actived;
  }
}

.tab-view {
  margin-left: $sidebar-width + 10px;
}

</style>

