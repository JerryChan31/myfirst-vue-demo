<template>
  <div id="app">
    <router-view name="sidebar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseList from './components/BaseList.vue'
import LeftColumn from './components/LeftColumn.vue'
import Login from './components/Login.vue'

/*
function listItem( id, title, deadline, value, isStarred){
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
    BaseList,
    LeftColumn,
    Login
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="less" scoped>
#app{
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}
</style>

<style lang="less">
body{
  background-image: linear-gradient(to right, #9ACBAB, #F7E3A8);
  margin: 0;
  height: 100%;
}

html{
  height: 100%;
}

// clear default style(Taobao)
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{
  margin:0;
  padding:0;
}

body,button,input,select,textarea{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
}

h1,h2,h3,h4,h5,h6{
  font-size:100%;
}

address,cite,dfn,em,var{
  font-style:normal;
}

ul,ol{
  list-style:none;
}

a{
  text-decoration:none;
}

a:hover{
  text-decoration:underline;
}

fieldset,img{
  border: 0;
}

button,input,select,textarea{
  font-size:100%;
}

table{
  border-collapse:collapse;
  border-spacing:0;
}

</style>
