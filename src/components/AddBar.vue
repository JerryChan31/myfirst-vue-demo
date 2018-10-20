<template>
  <div class="add-item">
    <v-icon name="plus"></v-icon>
    <input type="text" placeholder="Add a todo" v-model="addText" @focus="toggleAddFocusStatus(true)" @blur="toggleAddFocusStatus(false)" @keyup.enter="addItem()" >
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isAddOnFocus: false,
      addText: ''
    }
  },
  methods: {
    toggleAddFocusStatus: function (isFocused) {
      this.isAddOnFocus = isFocused
    },
    addItem: function () {
      if (this.addText.length !== 0 && this.isAddOnFocus === true) {
        this.$store.commit('addItem', {
          itemId: this.$store.state.itemCount + 1,
          title: this.addText,
          deadline: '',
          value: false,
          isStarred: false
        })
        this.addText = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
@add-item-background-color: #7eb694;
@icon-margin: 20px 20px 20px 20px;
@icon-width:20px;
@icon-height: 20px;
@item-height: 60px;
@add-item-margin: 10px 0 30px 0;

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
