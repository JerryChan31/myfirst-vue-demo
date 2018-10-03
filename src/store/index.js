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
    inbox: {
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
      }]
    },
    selfList: [{
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
      let temp = judgeIndex(this.state.showingListIndex)
      if (temp.isInbox) {
        // inbox situtation
        let backup = this.state.inbox.todoList[idx]
        backup.value = true
        this.state.inbox.completedList.push(backup)
        this.state.inbox.todoList.splice(idx, 1)
      } else {
        // selfList situtation
        let backup = this.state.selfList[temp.actualIndex].todoList[idx]
        backup.value = true
        this.state.selfList[temp.actualIndex].completedList.push(backup)
        this.state.selfList[temp.actualIndex].todoList.splice(idx, 1)
      }
    },
    itemCancelDone (state, idx) {
      let temp = judgeIndex(this.state.showingListIndex)
      if (temp.isInbox) {
        let backup = this.state.inbox.completedList[idx]
        backup.value = false
        this.state.inbox.todoList.push(backup)
        this.state.inbox.completedList.splice(idx, 1)
      } else {
        let backup = this.state.selfList[temp.actualIndex].completedList[idx]
        backup.value = false
        this.state.selfList[temp.actualIndex].todoList.push(backup)
        this.state.selfList[temp.actualIndex].completedList.splice(idx, 1)
      }
    },
    addItem (state, newItem) {
      let temp = judgeIndex(this.state.showingListIndex)
      if (temp.isInbox) {
        this.state.inbox.todoList.push(newItem)
        this.state.itemCount++
      } else {
        this.state.selfList[temp.actualIndex].todoList.push(newItem)
        this.state.itemCount++
      }
    },
    changeShowingList (state, idx) {
      this.state.showingListIndex = idx
    }
  }
})

function judgeIndex (idx) {
  if (idx === 0) {
    return {
      isInbox: true,
      actualIndex: null
    }
  } else {
    return {
      isInbox: false,
      actualIndex: idx - 1
    }
  }
}
