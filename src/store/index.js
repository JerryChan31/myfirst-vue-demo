import Vue from 'vue'
import Vuex from 'vuex'
import initData from "../test.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 12,
    showingListIndex: 0,
    userInfo: {
      username: 'JerryChan',
      prfImg: '../assets/logo.png'
    },
    selfList: []
  },
  mutations: {
    initStateFromLocalStorage (state) {
      let temp = localStorage.getItem("state");
      if (temp) {
        this.replaceState(Object.assign(this.state, JSON.parse(localStorage.getItem("state"))));
      } else {
        this.replaceState(Object.assign(this.state, initData));
      }
    },
    itemDone (state, idx) {
      // selfList situtation
      let backup = this.state.selfList[this.state.showingListIndex].todoList[idx]
      backup.value = true
      this.state.selfList[this.state.showingListIndex].completedList.push(backup)
      this.state.selfList[this.state.showingListIndex].todoList.splice(idx, 1)
    },
    itemCancelDone (state, idx) {
      let backup = this.state.selfList[this.state.showingListIndex].completedList[idx]
      backup.value = false
      this.state.selfList[this.state.showingListIndex].todoList.push(backup)
      this.state.selfList[this.state.showingListIndex].completedList.splice(idx, 1)
    },
    addItem (state, newItem) {
      this.state.selfList[this.state.showingListIndex].todoList.push(newItem)
      this.state.itemCount++
    },
    changeShowingList (state, idx) {
      this.state.showingListIndex = idx
    }
  }
})
