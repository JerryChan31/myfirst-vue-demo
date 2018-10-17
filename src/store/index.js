import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemCount: 4,
    showingListIndex: 0,
    userInfo: {
      username: 'JerryChan',
      prfImg: '../assets/logo.png'
    },
    selfList: [{
      listName: 'Inbox',
      todoList: [{
        itemId: 1,
        title: 'todo1',
        deadline: '',
        value: false,
        isStarred: false
      }, {
        itemId: 2,
        title: 'todo2',
        deadline: '',
        value: false,
        isStarred: false
      }],
      completedList: [{
        itemId: 3,
        title: 'todo3',
        deadline: '',
        value: true,
        isStarred: false
      }, {
        itemId: 4,
        title: 'todo4',
        deadline: '',
        value: true,
        isStarred: false
      }]}
      ,{
      listName: 'List1',
      todoList: [{
        itemId: 5,
        title: 'todo5',
        deadline: '',
        value: false,
        isStarred: false
      }, {
        itemId: 6,
        title: 'todo6',
        deadline: '',
        value: false,
        isStarred: false
      }],
      completedList: [{
        itemId: 7,
        title: 'todo7',
        deadline: '',
        value: true,
        isStarred: false
      }, {
        itemId: 8,
        title: 'todo8',
        deadline: '',
        value: true,
        isStarred: false
      }]
    }, {
      listName: 'List2',
      todoList: [{
        itemId: 9,
        title: 'todo9',
        deadline: '',
        value: false,
        isStarred: false
      }, {
        itemId: 10,
        title: 'todo10',
        deadline: '',
        value: false,
        isStarred: false
      }],
      completedList: [{
        itemId: 11,
        title: 'todo11',
        deadline: '',
        value: true,
        isStarred: false
      }, {
        itemId: 12,
        title: 'todo12',
        deadline: '',
        value: true,
        isStarred: false
      }]
    }]
  },
  mutations: {
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