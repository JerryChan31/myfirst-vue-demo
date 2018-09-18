<template>
  <div id="app">
    <left-column></left-column>
    <base-list v-bind:twoList="list"></base-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseList from './components/BaseList.vue'
import LeftColumn from './components/LeftColumn.vue'
/*
function listItem( id, title, deadline, value, isStarred) {
  var res = new Object();
  res.itemId = id;
  res.title = title;
  res.deadline = deadline;
  res.value = value;
  res.isStarred = isStarred;
  return res;
}
*/

export default {
  name: 'app',
  components: {
    HelloWorld,
    BaseList,
    LeftColumn
  },
  data: function () {
    return {
      list: {
        todoList: [{
          itemId: 1,
          title: 'todo1',
          deadline: 'today',
          value: false,
          isStarred: false
        }, {
          itemId: 2,
          title: 'todo2',
          deadline: 'tomorrow',
          value: false,
          isStarred: false
        }],
        completedList: [{
          itemId: 3,
          title: 'todo3',
          deadline: 'yesterday',
          value: true,
          isStarred: false
        }, {
          itemId: 4,
          title: 'todo4',
          deadline: 'yesterday',
          value: true,
          isStarred: false
        }]
      }
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  align-items: flex-start;
}
</style>

<style lang="less">
body {
  background-image: linear-gradient(to right, #9ACBAB, #F7E3A8);
  margin: 0;
}
</style>
