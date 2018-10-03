<template>
  <div class="todo-item" v-bind:value="myValue">
    <input type="checkbox" v-model="myValue" >
    <label> {{title}} </label>
  </div>
</template>

<script>

export default {
  name: 'BaseItem',
  props: {
    itemId: Number,
    title: String,
    deadline: String, // Date? type check problem
    value: Boolean,
    isStarred: Boolean
  },
  data: function () {
    return {
      myValue: this.value
    }
  },
  watch: {
    myValue: function (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style lang="less" scoped>

@checkbox-edge: 20px;
@item-height: 60px;
@border-width: 1px;
@text-size: 20px;

input[type="checkbox"]{
  width: @checkbox-edge;
  height: @checkbox-edge;
  margin: @checkbox-edge;
}

.todo-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: @text-size;
  height: @item-height;
  background-color: white;
  margin-top: 1px;
  &:hover {
    background-color: #E5F3FF;
  }
}
</style>
