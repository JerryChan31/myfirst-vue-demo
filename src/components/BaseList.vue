<template>
  <div class="baselist">
    <div class="add-item">
      <v-icon name="plus"></v-icon>
      <input type="text" placeholder="Add a todo" v-model="addText" @focus="toggleAddFocusStatus(true)" @blur="toggleAddFocusStatus(false)" @keyup.enter="addItem()" >
    </div>
    <div>
      <base-item v-for="(todo, index) in showingList.todoList" v-bind="todo" :key="todo.itemId" v-model="todo.value" v-on:change="itemDone(index)"></base-item>
    </div>
    <div>
      <label class="notshowing" v-show="!isCompletedShown" v-on:click="toggleShowCompleted(true)"> {{ showingList.completedList.length }} COMPLETED TO-DOS </label>
      <label class="showing" v-show="isCompletedShown" v-on:click="toggleShowCompleted(false)"> HIDE COMPLETED TO-DOS </label>
    </div>
    <div v-show="isCompletedShown">
      <base-item class="completed-item" v-for="(todo, index) in showingList.completedList" v-bind="todo" :key="todo.itemId" v-on:change="itemCancelDone(index)"></base-item>
    </div>
  </div>
</template>

<script>
import BaseItem from './BaseItem.vue'

export default {
  name: 'BaseList',
  props: {
    twoList: {
      todoList: Array,
      completedList: Array
    }
  },
  data: function () {
    return {
      isCompletedShown: false,
      isAddOnFocus: false,
      addText: "",
    }
  },
  computed: {
    showingList () {
      return this.$store.state.inbox;
    }
  },
  components: {
    BaseItem
  },
  methods: {
    
    itemDone: function (index) {
      this.$store.commit("itemDone", index);
    },
    itemCancelDone: function (index) {
      this.$store.commit("itemCancelDone", index);
    },
    toggleShowCompleted: function (status) {
      this.isCompletedShown = status;
    },
    toggleAddFocusStatus: function (isFocused) {
      this.isAddOnFocus = isFocused;
    },
    addItem: function() {
      if (this.addText.length !== 0 && this.isAddOnFocus == true) {
        this.$store.commit("addItem", {
          itemId: this.$store.state.itemCount + 1,
          title: this.addText,
          deadline: '',
          value: false,
          isStarred: false
        });
        this.addText = "";
      }
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
  @add-item-background-color: #7eb694;
  @icon-margin: 20px 20px 20px 20px;
  @icon-width:20px;
  @icon-height: 20px;
  @item-height: 60px;
  @text-size: 20px;
  @add-item-margin: 10px 0 30px 0;

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
    display: block;
    flex: 1 1 auto;
    margin: @base-list-margin;
  }
  .add-item {
    display: flex;
    background-color: @add-item-background-color;
    align-items: center;
    height: @item-height;
    margin: @add-item-margin;
    input {
      flex:1;
      background-color: inherit;
      border: 0;
      font-size: 20px;
      outline: none;
      color: white;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: white;
    }
    .fa-icon {
      color: white;
      margin: @icon-margin;
      width: @icon-width;
      height: @icon-height;
    }
  }
</style>
