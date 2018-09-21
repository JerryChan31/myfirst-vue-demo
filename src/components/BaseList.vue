<template>
  <div class="baselist">
    <div class="add-item">
      <v-icon name="plus"></v-icon>
      <input type="text" placeholder="Add a todo">
    </div>
    <div>
      <base-item v-for="(todo, index) in myTodoList" v-bind="todo" :key="todo.itemId" v-model="todo.value" v-on:change="moveToCompleted(index)"></base-item>
    </div>
    <div>
      <label class="notshowing" v-show="!isCompletedShown" v-on:click="toggleShowCompleted(true)"> {{ myCompletedList.length }} COMPLETED TO-DOS </label>
      <label class="showing" v-show="isCompletedShown" v-on:click="toggleShowCompleted(false)"> HIDE COMPLETED TO-DOS </label>
    </div>
    <div v-show="isCompletedShown">
      <base-item class="completed-item" v-for="(todo, index) in myCompletedList" v-bind="todo" :key="todo.itemId" v-on:change="moveToTodo(index)"></base-item>
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
      myTodoList: this.twoList.todoList,
      myCompletedList: this.twoList.completedList
    }
  },
  components: {
    BaseItem
  },
  methods: {
    moveToCompleted: function (index) {
      this.myTodoList[index].value = true;
      var temp = this.myTodoList[index];
      this.myTodoList.splice(index, 1);
      this.myCompletedList.push(temp);
    },
    moveToTodo: function (index) {
      this.myCompletedList[index].value = false;
      var temp = this.myCompletedList[index];
      this.myCompletedList.splice(index, 1);
      this.myTodoList.push(temp);
    },
    toggleShowCompleted: function (status) {
      this.isCompletedShown = status;
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
    input {
      flex:1;
      background-color: inherit;
      border: 0;
    }
    .fa-icon {
      color: white;
    }
  }
</style>
