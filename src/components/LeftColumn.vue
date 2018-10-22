<!-- A column contain profile information, all the list, and search module-->
<template>
  <div class="leftColumn">
    <search-bar></search-bar>
    <profile-bar :username="username"></profile-bar>
    <div class="list-space">
      <div class="list" :class="{isSelected: index==showingListIndex}" v-for="(list, index) in list" :key="index" @click="clickList(index)">
        <v-icon v-if="index==0" name="inbox" class="inbox"/>
        <v-icon v-if="index!=0" name="list-ul" class="selfList"/>
        <span>{{ list.listName }}</span>
      </div>
    </div>
    <div class="create-list" @click="createList">
      <v-icon name="plus"></v-icon>
      <span>Creat list</span>
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
    // fetch info from vuex.
    username () {
      return this.$store.state.userInfo.username
    },
    prfImg () {
      return this.$store.state.userInfo.prfImg
    },
    list () {
      return this.$store.state.selfList
    },
    showingListIndex () {
      return this.$store.state.showingListIndex
    }
  },
  methods: {
    // change showing list by clicking the list name
    clickList (idx) {
      this.$store.commit('changeShowingList', idx)
    },
    // create a new empty list.
    createList () {
      this.$store.commit('createList')
    }
  }
}
</script>

<style lang="less" scoped>
@left-column-width: 350px;
@big-icon-width: 22px;
@big-icon-height: 24px;
@big-icon-padding: 16px 17px 16px 17px;
@bar-height: 60px;
@hover-color: #e5f3ff;
@selected-color: #cce8ff;
@inbox-color: #2b88d9;


.leftColumn {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  font-size: 20px;
  user-select: none;
  div {
    width: @left-column-width;
  }
  background-color: white;
  .list-space {
    flex: 1 1;
  }
}

.fa-icon {
  width: @big-icon-width;
  height: @big-icon-height;
  padding: @big-icon-padding;
  &.inbox {
    color: @inbox-color;
  }
}

.list {
  display: flex;
  background-color: white;
  height: @bar-height;
  align-items: center;
  &:hover {
    background-color: @hover-color;
  }
  &.isSelected {
    background-color: @selected-color;
  }
}

.create-list {
  display: flex;
  align-items: center;
  color: @inbox-color;
}

</style>
