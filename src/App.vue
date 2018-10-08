<template>
  <div id="app">
    <router-view name="sidebar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseList from './components/BaseList.vue'
import LeftColumn from './components/LeftColumn.vue'
import Login from './components/Login.vue'
import router from './config/routes.js'

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
    LeftColumn,
    Login,
  },
  data: function () {
    return {}
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100%;
}
</style>
