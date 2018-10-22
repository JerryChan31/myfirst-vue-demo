<!-- A form to modify deadline and title of a todo item. -->
<template>
  <div class="form">
    <div>
      <v-icon name="edit"></v-icon>
      <span> Title</span>
    </div><div>
      <input type="text" v-model="myTitle">
    </div><div>
      <v-icon name="edit"></v-icon>
      <span> Deadline (YYYY/MM/DD)</span>
    </div><div>
      <input type="text" name="year" maxlength="4" v-model="year">
      <span> / </span>
      <input type="text" name="month" maxlength="2" v-model="month">
      <span> / </span>
      <input type="text" name="day" maxlength="2" v-model="date">
    </div><div class="button-area">
      <button class="confirm" @click="commitEdit">确认</button>
      <button class="cancel" @click="closeWindow">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeWindow: function(e) {
      this.$emit("close");
    },
    commitEdit: function() {
      let temp = this.year + "/" + this.month + "/" + this.date;
      this.$store.commit("editItem", {title: this.myTitle, deadline: temp,id: this.id});
      this.$emit("close");
    },
    // convert date info from string.
    getDateObj() {
      return new Date(this.deadline);
    },
    getYear() {
      const year = this.getDateObj().getFullYear();
      return Number.isNaN(year) ? "" : year;
    },
    getMonth() {
      const month = this.getDateObj().getMonth();
      return Number.isNaN(month) ? "" : month + 1; // month starts from 0
    },
    getDate() {
      const date = this.getDateObj().getDate();
      return Number.isNaN(date) ? "" : date;
    }
  },
  props: {
    title: String,
    deadline: String,
    id: Number
  },
  data: function () {
    return {
      myTitle: this.title,
      year: this.getYear(),
      month: this.getMonth(),
      date: this.getDate()
    }
  }
}
</script>

<style lang="less" scoped>
@button-color-red: #71AF8C;
@button-color-blue:  #008CBA;
@button-padding: 10px 20px 10px 20px;
@space-between: 10px;

div.form{
  width: 380px;
  color: grey;
  font-size: 20px;
  margin: 30px auto 30px auto;
  div {
    margin-top: 20px;
    text-align: center;
  }
  div.button-area {
    margin-top: 30px;
    text-align: center;
  }
}

input {
  border: 0;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
  text-align: center;
  &[name="year"] {
    width: 4em;
  }
  &[name="month"],&[name="day"] {
    width: 2em;
  }
}

button {
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  padding: @button-padding;
  margin: @space-between;
  &.confirm {
    background-color: @button-color-red;
  }
  &.cancel {
    background-color: @button-color-blue;
  }
}
</style>
