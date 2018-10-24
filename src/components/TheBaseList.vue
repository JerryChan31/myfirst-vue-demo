<!-- a List contain todo items and completed items. -->
<template>
  <div class="baselist">
    <div class="list-name">
      {{ showingList.listName }}
    </div>
    <div class="list-body">
      <add-bar></add-bar>
      <transition-group 
       name="list"
      >
        <base-item 
         v-for="(todo, index) in showingTodoList" 
         v-bind="todo" 
         :key="todo.itemId" 
         @change="itemDone(index)">
        </base-item>
      <div key="togglebutton">
        <label 
         class="notshowing"
         v-show="!isCompletedShown"
         v-on:click="toggleShowCompleted(true)">
       {{ showingList.completedList.length }} COMPLETED TO-DOS </label>
        <label class="showing" v-show="isCompletedShown" v-on:click="toggleShowCompleted(false)"> HIDE COMPLETED TO-DOS </label>
      </div>
        
        <base-item v-show="isCompletedShown" class="completed-item" v-for="(todo, index) in showingList.completedList" v-bind="todo" :key="todo.itemId" v-on:change="itemCancelDone(index)"></base-item>
      
      </transition-group>
    </div>
  </div>
</template>

<script>
import BaseItem from './BaseItem.vue'
import AddBar from './AddBar.vue'

export default {
  name: 'BaseList',
  data: function () {
    return {
      // isCompletedShown: Whether show the completed list.
      isCompletedShown: false
    }
  },
  computed: {
    // get showing list for vuex.
    showingList () {
      return this.$store.getters.getShowingList
    },
    // sort by whether the items are starred.
    showingTodoList () {
      return this.showingList.todoList.sort((a, b) => {
        return (a.isStarred === false && b.isStarred === true)
      })
    }
  },
  components: {
    BaseItem,
    AddBar
  },
  methods: {
    itemDone: function (index) {
      this.$store.commit('itemDone', index)
    },
    itemCancelDone: function (index) {
      this.$store.commit('itemCancelDone', index)
    },
    toggleShowCompleted: function (status) {
      this.isCompletedShown = status
    }
  }
}
</script>

<style lang="less" scoped>

@togglebutton-font-size: 15px;
@togglebutton-height: 38px;
@togglebutton-padding: 0 15px 0 15px;
@togglebutton-margin: 30px 0 5px 0;
@togglebutton-not-selected: #71AF8C;
@togglebutton-selected: #5F8D73;
@completeditem-color: #a9a9a9;
@base-list-margin:20px 20px 20px 20px;
@text-size: 20px;
@name-bar-height: 56px;
@name-bar-padding: 0 0 0 20px;

label {
  display: inline-flex;
  font-size: @togglebutton-font-size;
  height: @togglebutton-height;
  color: white;
  margin: @togglebutton-margin;
  padding: @togglebutton-padding;
  align-items: center;
  user-select: none;
  &.notshowing {
    background-color: @togglebutton-not-selected;
    &:hover {
      background-color: @togglebutton-selected;
    }
  }
  &.showing {
    background-color: @togglebutton-selected;
  }
}
.completed-item {
  color: @completeditem-color !important;
}
.baselist {
  flex: 1 1 auto;
}
.list-body {
  margin: @base-list-margin;
}

.list-name {
  user-select: none;
  display: flex;
  align-items: center;
  background-color: @togglebutton-not-selected;
  color: white;
  font-size: 30px;
  height: @name-bar-height;
  padding: @name-bar-padding;
}
// to be rewritten
.list-enter-active, .list-leave-active, .list-move {
  transition: all 0.5s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.sort {
  transition: all 0.5s;
}

.appear .appear{
  transition: all 2s;
}

</style>
