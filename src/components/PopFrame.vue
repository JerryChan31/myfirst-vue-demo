<template v-on:close="closeWindow">
  <div class="background">
    <div class="window">
      <div class="close-bar">
          <div @click="closeWindow">
            <v-icon name="times"></v-icon>
          </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeWindow: function() {
      this.$emit("close")
    }
  }
}
</script>

<style lang="less" scoped>
@window-width: 600px;
@window-height: 300px;
@theme-color: #B2D1AA;
@close-bar-height: 30px;
@icon-size: 22px;
@icon-padding: 4px;

div.background {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
}

div.window {
  position: fixed;
  width: @window-width;

  background-color: #e3f2de;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  div.close-bar {
    height: @close-bar-height;
    background-color: @theme-color;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .fa-icon {
      width: @icon-size;
      height: @icon-size;
      color: white;
      padding: @icon-padding;
      cursor: pointer;
    }
  }
}

</style>
