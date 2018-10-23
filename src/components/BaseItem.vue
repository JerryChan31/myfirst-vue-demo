<!-- Single todo item component -->
<template>
  <div class="todo-item" v-bind:value="myValue">
    <input type="checkbox" v-model="myValue">
    <label @click="editWindow(true)"> {{title}} </label>
    <span v-bind:class="{expired: isExpired, deadline: !isExpired}" v-if="!myValue">{{deadline}}</span>
    <div class="starIcon" @click="toggleStarred">
      <v-icon v-if="isStarred && !value" name="star"></v-icon>
      <v-icon v-if="!isStarred && !value" name="regular/star"></v-icon>
    </div>
    <pop-frame v-if="isPoped" @close="editWindow(false)">
      <pop-edit-item @close="editWindow(false)" v-bind="{title: title, deadline: deadline, id: itemId}"></pop-edit-item>
    </pop-frame>
  </div>
</template>

<script>
import PopFrame from './PopFrame.vue'
import PopEditItem from './PopEditItem.vue'
export default {
  name: 'BaseItem',
  props: {
    // info of an item
    itemId: Number,
    title: String,
    deadline: String,
    value: Boolean,
    isStarred: Boolean
  },
  data: function () {
    return {
      // myValue: local copy of value
      // isPoped: whether the edit window poped.
      myValue: this.value,
      isPoped: false
    }
  },
  watch: {
    // emit to BaseList
    // commit mutation in BaseList
    myValue: function (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('change', val)
      }
    }
  },
  methods: {
    toggleStarred: function (event) {
      this.$store.commit('toggleItemStar', this.itemId)
    },
    editWindow (newVal) {
      this.isPoped = newVal;
    }
  },
  computed: {
    // use for control the style - expired is red.
    isExpired: function () {
      let now = Date.now()
      let temp = Date.parse(this.deadline)
      return now - temp > 1000*60*60*24 // a day
    }
  },
  components: {
    PopFrame,
    PopEditItem
  }
}
</script>

<style lang="less" scoped>

@checkbox-edge: 20px;
@item-height: 60px;
@border-width: 1px;
@text-size: 20px;
@space-between-item: 1px;
@star-size: 23px;
@star-padding: 17px;
@deadline-font-size: 15px;

input[type="checkbox"]{
  width: @checkbox-edge;
  height: @checkbox-edge;
  margin: @checkbox-edge;
}

.todo-item {
  display: flex;
  align-items: center;
  font-size: @text-size;
  height: @item-height;
  background-color: white;
  margin-top: @space-between-item;
  &:hover {
    background-color: #E5F3FF;
  }
  label {
    flex: 1 1 auto;
    height: @item-height;
    display: flex;
    align-items: center;
  }
  .fa-icon {
    color: orange;
    width: @star-size;
    height: @star-size;
    padding: @star-padding;
  }
  span {
    font-size: @deadline-font-size;
    &.deadline {
      color: grey;
    }
    &.expired {
      color: red;
    }
  }
}

</style>
