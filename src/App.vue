<template>
  <div id="app">
    <left-column v-bind:personalList="personalList"></left-column>
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
      personalList: [
        {
          name: 'list1'
        },{
          name: 'list2'
        }
      ],
      list: {
        todoList: []
      }
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
</style>

<style lang="less">
body {
  background-image: linear-gradient(to right, #9ACBAB, #F7E3A8);
  margin: 0;
  height: 100%;
}
html {  
  height: 100%;
}
</style>
