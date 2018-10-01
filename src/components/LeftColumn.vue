<template>
  <div class="leftColumn">
    <div class="search-bar">
      <v-icon name="bars" />
      <input type="text">
      <v-icon name="search" />
    </div>
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
    <div class="inbox">
      <v-icon name="inbox" />
      <label> Inbox </label>
    </div>
    <div class="personal-list">
      <div class="personal-list-item" v-for="(list, index) in listname" :key="index">
        <v-icon name="list-ul" />
        <span>{{ list }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  computed: {
    username () {
      return this.$store.state.userInfo.username;
    },
    prfImg () {
      return this.$store.state.userInfo.prfImg;
    },
    listname () {
      return this.$store.state.listname;
    }
  },
  props: {
    personalList: Array
  },
  data: function () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
@left-column-width: 350px;
@searchbar-background-color: #609477;
@big-icon-width: 22px;
@big-icon-height: 24px;
@big-icon-padding: 16px 17px 16px 17px;
@input-box-width: 240px;
@input-box-leftspace: 5px;
@input-box-fontsize: 18px;
@bar-height: 60px;
@profile-img-size: 40px;
@profile-img-border: 1px none gray;
@profile-img-margin: 10px;
@profile-icon-padding: (@bar-height - @big-icon-height)/2px 17px (@bar-height - @big-icon-height)/2px 17px;
@hover-color: #e5f3ff;

.leftColumn {
  flex: 0 0 auto;
  div {
    width: @left-column-width;
  }
  
  flex-shrink: 0;
  flex-direction: column;
  background-color: white;
}

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

.inbox {
  display: flex;
  background-color: white;
  height: @bar-height;
  align-items: center;
  font-size: 20px;
  .fa-icon {
    width: @big-icon-width;
    height: @big-icon-height;
    color: #2b88d9;
    padding: @big-icon-padding;
  }
  &:hover {
    background-color: @hover-color;
  }
}

.personal-list-item {
  .inbox;
  .fa-icon {
    color: black;
  }
}

</style>
