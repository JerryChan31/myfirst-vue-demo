<template>
  <div class="todo-item" v-bind:value="myValue">
    <input type="checkbox" v-model="myValue" >
    <label> {{title}} </label>
    <span v-bind:class="{expired: isExpired, deadline: !isExpired}" v-if="!myValue">{{deadline}}</span>
    <div class="starIcon" @click="toggleStarred">
      <v-icon v-if="isStarred && !value" name="star"></v-icon>
      <v-icon v-if="!isStarred && !value" name="regular/star"></v-icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseItem',
  props: {
    itemId: Number,
    title: String,
    deadline: String,
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
  },
  methods: {
    toggleStarred: function () {
      this.$store.commit('toggleItemStar', this.itemId)
    }
  },
  computed: {
    isExpired: function() {
      let now = Date.now();
      let temp = Date.parse(this.deadline);
      return now - temp > 0;
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
  label {
    flex: 1 1 auto;
  }
  .fa-icon {
    color: orange;
    width: 23px;
    height: 23px;
    padding: 17px 17px 17px 17px;
  }
  span {
    font-size: 15px;
    margin-right: 10px;
    &.deadline {
      color: grey;
    }
    &.expired {
      color: red;
    }
  }
}

</style>
