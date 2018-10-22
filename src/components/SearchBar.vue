<!-- To be extended, now it's not able to search. -->
<template>
  <div class="search-bar">
    <v-icon name="bars" />
    <input type="text">
    <v-icon name="search" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

@searchbar-background-color: #609477;
@big-icon-width: 22px;
@big-icon-height: 24px;
@big-icon-padding: 16px 17px 16px 17px;
@input-box-width: 240px;
@input-box-leftspace: 5px;
@input-box-fontsize: 18px;
.search-bar {
  display: flex;
  background-color: @searchbar-background-color;
  color: white;
  .fa-icon {
    width: @big-icon-width;
    height: @big-icon-height;
    padding: @big-icon-padding;
    align-items: center;
  }
  input {
    width: @input-box-width;
    border: 0;
    background-color: @searchbar-background-color;
    color: inherit;
    font-size: @input-box-fontsize;
    padding-left: @input-box-leftspace;
  }
}
</style>
