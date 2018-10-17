<template>
  <div class="leftColumn">
    <search-bar></search-bar>
    <profile-bar :username="username"></profile-bar>
    <div class="personal-list">
      <div class="personal-list-item" v-for="(list, index) in selfList" :key="index" @click="clickSelfList(index)">
        <v-icon v-if="index==0" name="inbox" />
        <v-icon v-if="index!=0" name="list-ul" />
        <span>{{ list.listName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import ProfileBar from './ProfileBar.vue'
export default {
  components: {
    SearchBar,
    ProfileBar
  },
  computed: {
    username () {
      return this.$store.state.userInfo.username;
    },
    prfImg () {
      return this.$store.state.userInfo.prfImg;
    },
    selfList () {
      return this.$store.state.selfList;
    }
  },
  methods: {
    clickInbox () {
      this.$store.commit("changeShowingList", 0);
    },
    clickSelfList (idx) {
      this.$store.commit("changeShowingList", idx)
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
