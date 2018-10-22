<!-- To be extended. Now it can just only show the username and profile image.-->
<template>
  <div class="profile-bar">
    <div class="profile">
      <img alt="profile_img" src="../assets/logo.png">
      <label>{{ username }}</label>
      <v-icon name="angle-down" />
    </div>
    <span>
      <v-icon name="regular/bell" class="bell"/>
      <v-icon name="regular/comment" class="comment"/>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  }
}
</script>

<style lang="less" scoped>
@hover-color: #e5f3ff;
@big-icon-width: 22px;
@big-icon-height: 24px;
@bar-height: 60px;
@profile-img-size: 40px;
@profile-img-border: 1px none gray;
@profile-img-margin: 10px;
@profile-icon-padding: (@bar-height - @big-icon-height)/2px 17px (@bar-height - @big-icon-height)/2px 17px;

.profile-bar {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  height: @bar-height;
  .profile {
    display: inherit;
    align-items: center;
    img {
      width: @profile-img-size;
      height: @profile-img-size;
      border: @profile-img-border;
      border-radius: 50%;
      margin: @profile-img-margin;
    }
    &:hover {
      background-color: @hover-color;
    }
  }
  span{
    display: flex;
  }
  .fa-icon {
    width: @big-icon-width;
    height: @big-icon-height;
    padding: @profile-icon-padding;
    &:hover {
      background-color: @hover-color;
    }
  }
}

</style>
