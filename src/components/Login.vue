<!-- a login interface to be fulfilled. -->
<template>
  <div class="outer-frame">
    <div class="login-frame">
      <h1>IT'S FAKE WUNDERLIST</h1>
      <span>Username</span>
      <input class="text-area" type="text" name="username">
      <span>Password</span>
      <input class="text-area" type="password" name="password">
      <span class="alert-box" v-if="alert">{{alertMessage}}</span>
      <input type="submit" value="登录">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: false,
      alertMessage: 'Wrong username or password.'
    }
  }
}
</script>

<style lang="less" scoped>
@theme-color: #609477;
@alert-box: #e29f98;
@alert-box-border-color: #ea7272;

  .outer-frame {
    display: flex;
    flex: 1 1;
    justify-content: center;
  }
  .login-frame {
    align-self: center;
    padding: 30px 30px 30px 30px;
    border-radius: 10px;
    border: solid @theme-color 1px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    box-shadow: 3px 3px 10px 0px;
    h1 {
      font-size: 20px;
      align-self: center;
      color: @theme-color;
    }
    span {
      display: block;
      margin-top: 5px;
      display: block;
      color: @theme-color;
    }
    .text-area {
      margin: 0 0 5px 0;
      border: 2px @theme-color solid;
      border-width: 0 0 1px 0;
      background-color: transparent;
      outline: none;
      color: @theme-color;
      &:focus {
        border-color: white;
      }
    }
    input[type="submit"] {
      height: 30px;
      margin-top: 20px;
      border: 1px solid transparent;
      outline: none;
      border-radius: 5px;
      background-color: @theme-color;
      color: white;
    }
    .alert-box {
      background-color: @alert-box;
      border: 2px solid @alert-box-border-color;
      padding: 2px 2px 2px 2px;
      color: black;
    }
  }
</style>
