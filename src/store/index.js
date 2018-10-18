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
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem("state"))));
      } else {
        this.replaceState(Object.assign(state, initData));
      }
    },
    itemDone (state, idx) {
      // selfList situtation
      let backup = state.selfList[state.showingListIndex].todoList[idx]
      backup.value = true
      state.selfList[state.showingListIndex].completedList.push(backup)
      state.selfList[state.showingListIndex].todoList.splice(idx, 1)
    },
    itemCancelDone (state, idx) {
      let backup = state.selfList[state.showingListIndex].completedList[idx]
      backup.value = false
      state.selfList[state.showingListIndex].todoList.push(backup)
      state.selfList[state.showingListIndex].completedList.splice(idx, 1)
    },
    addItem (state, newItem) {
      state.selfList[state.showingListIndex].todoList.push(newItem)
      state.itemCount++
    },
    changeShowingList (state, idx) {
      state.showingListIndex = idx
    },
    toggleItemStar (state, id) {
      let temp = this.getters.getShowingTodoItemById(id);
      temp.isStarred = !temp.isStarred
    }
  },
  getters: {
    getShowingList: (state) => {
      return state.selfList[state.showingListIndex]
    },
    getShowingTodoItemById: (state, getters) => (id) => {
      return getters.getShowingList.todoList.find(todo => todo.itemId === id);
    }
  }
})
