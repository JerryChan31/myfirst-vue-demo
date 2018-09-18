<template>
  <div class="leftColumn">
    <div class="search-bar">
      <v-icon name="bars" />
      <input type="text">
      <v-icon name="search" />
    </div>
    <div class="name-bar">
      <v-icon name="angle-down" />
      <v-icon name="regular/bell" />
      <v-icon name="regular/comment" />
    </div>
    <v-icon name="inbox" />
    <v-icon name="list-ul" />
  </div>
</template>


<script>

export default {
  components: {

  }
}
</script>

<style lang="less" scoped>


.leftColumn {
  width: 350px;
  flex: 0 0 auto;
  margin-right: 20px;
}

.search-bar {
  display: flex;
  width: 350px;
  background-color: #609477;
  color: white;
  .fa-icon {
    width: 22px;
    height: 24px;
    padding: 16px 17px 16px 17px;
    align-items: center;
  }
  input {
    width: 240px;
    border: 0;
    background-color: #609477;
    color: white;
    font-size: 18px;
    padding-left: 5px;
  }
}



</style>
