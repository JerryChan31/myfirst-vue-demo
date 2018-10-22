import Vue from 'vue'
import Vuex from 'vuex'
import initData from '../test.json'

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
      let temp = localStorage.getItem('state')
      if (temp) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('state'))))
      } else {
        this.replaceState(Object.assign(state, initData))
      }
    },
    itemDone (state, idx) {
      // selfList situtation
      let backup = this.getters.getShowingList.todoList[idx]
      backup.value = true
      this.getters.getShowingList.completedList.push(backup)
      this.getters.getShowingList.todoList.splice(idx, 1)
    },
    itemCancelDone (state, idx) {
      let backup = this.getters.getShowingList.completedList[idx]
      backup.value = false
      this.getters.getShowingList.todoList.push(backup)
      this.getters.getShowingList.completedList.splice(idx, 1)
    },
    addItem (state, newItem) {
      this.getters.getShowingList.todoList.push(newItem)
      state.itemCount++
    },
    changeShowingList (state, idx) {
      state.showingListIndex = idx
    },
    toggleItemStar (state, id) {
      let temp = this.getters.getShowingTodoItemById(id)
      temp.isStarred = !temp.isStarred
    },
    createList (state) {
      state.selfList.push({
        listName: 'New list',
        todoList: [],
        completedList: []
      })
    },
    editItem (state, payload) {
      let temp = this.getters.getShowingItemById(payload.id);
      temp.deadline = payload.deadline;
      temp.title = payload.title;
    }
  },
  getters: {
    getShowingList: (state) => {
      return state.selfList[state.showingListIndex]
    },
    getShowingTodoItemById: (state, getters) => (id) => {
      return getters.getShowingList.todoList.find(todo => todo.itemId === id)
    },
    getShowingItemById: (state, getters) => (id) => {
      const todo = getters.getShowingList.todoList.find(todo => todo.itemId === id);
      if (todo === undefined) {
        return getters.getShowingList.completedList.find(todo => todo.itemId === id)
      } else {
        return todo;
      }
    }
  }
})
