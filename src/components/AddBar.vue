<!-- Add item to a list. -->
<!-- Press enter after finished input to add -->
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
    // Item can only be added when input is focused.
    // record the focus state in data 'isAddOnFocus'.
    toggleAddFocusStatus: function (isFocused) {
      this.isAddOnFocus = isFocused
    },
    // Add an default item (without deadline and star).
    addItem: function () {
      if (this.addText.length !== 0 && this.isAddOnFocus === true) {
        this.$store.commit('addItem', {
          itemId: this.$store.state.itemCount + 1,
          title: this.addText,
          deadline: '',
          value: false,
          isStarred: false
        })
        this.addText = '' // clear the input box.
      }
    }
  }
}
</script>

<style lang="less" scoped>
@background-color: #7eb694;
@icon-margin: 20px 20px 20px 20px;
@icon-width:20px;
@icon-height: 20px;
@item-height: 60px;
@add-item-margin: 10px 0 30px 0;

div.add-item {
  display: flex;
  background-color: @background-color;
  align-items: center;
  height: @item-height;
  margin: @add-item-margin;
  color: white;
  input[type="text"] {
    background-color: inherit;
    border: 0;
    font-size: 20px;
    outline: none;
    flex: 1 1;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: white;
  }
  .fa-icon {
    margin: @icon-margin;
    width: @icon-width;
    height: @icon-height;
  }
}
</style>
