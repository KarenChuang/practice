<template>
  <div class="horizon-tree">
    <div v-for="({list, selectedIndex}, x) of lists" class="horizon-tree__level">
      <div v-for="(item, y) of list"
           class="horizon-tree__item"
           @click.self="select(x, y, item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  data () {
    return {
      lists: [{
          list: [{
          id: 1,
          name: '结构一',
          hasChild: true
        }, {
          id: 2,
          name: '结构二',
          hasChild: true
        }, {
          id: 3,
          name: '结构三',
          hasChild: true
        }, {
          id: 4,
          name: '结构四',
          hasChild: false
        }]
      }],
      childList: [{
        id: 1,
        name: '结构一',
        hasChild: true
      }, {
        id: 2,
        name: '结构二',
        hasChild: true
      }, {
        id: 3,
        name: '结构三',
        hasChild: true
      }, {
        id: 4,
        name: '结构四',
        hasChild: false
      }]
    }
  },
  methods: {
    select (x, y, { id, hasChild }) {
      this.lists[x].selectedIndex = y
      const children = hasChild ? this.childList : []
      // add children list
      this.lists.splice(x + 1, this.lists.length, { list: children })
    }
  }
}
</script>

<style lang="scss" scoped>
  .horizon-tree {
    padding: 5px;
    width: 85%;
    height: 400px;
    display: flex;
    overflow-x: auto;
    border: 1px solid #eee;
    &__level {
      flex-shrink: 0;
      width: 250px;
      border: 1px solid #eaeaea;
      border-right: none;
      &:last-child {
        border-right: 1px solid #eaeaea;
      }
    }
    &__item {
      padding: 10px;
      &:hover {
        background: #f4f4f4;
      }
      // 节点右侧 ">"
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 9px;
        height: 9px;
        border-right: 2px solid #dcdcdc;
        border-bottom: 2px solid #dcdcdc;
        transform: rotate(-45deg);
        top: 13px;
        right: 20px;
      }
    }
  }
</style>
