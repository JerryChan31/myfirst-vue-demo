import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemCount: 4,
    userInfo: {
      username: "JerryChan",
      prfImg: "../assets/logo.png"
    },
    inbox:{
      listName: "Inbox",
      todoList:[{
        itemId: 1,
        title: 'todo1',
        deadline: 'today',
        value: false,
        isStarred: false
        }, {
        itemId: 2,
        title: 'todo2',
        deadline: 'tomorrow',
        value: false,
        isStarred: false
      }],
      completedList: [{
        itemId: 3,
        title: 'todo3',
        deadline: 'yesterday',
        value: true,
        isStarred: false
        }, {
        itemId: 4,
        title: 'todo4',
        deadline: 'yesterday',
        value: true,
        isStarred: false
      }]
    },
    selfList: [{
      
    }, {

    }]
  },
  mutations: {
    itemDone (state, idx) {
      let temp = this.state.inbox.todoList[idx];
      temp.value = true;
      this.state.inbox.completedList.push(temp);
      this.state.inbox.todoList.splice(idx, 1);
    },
    itemCancelDone (state, idx) {
      let temp = this.state.inbox.completedList[idx];
      temp.value = false;
      this.state.inbox.todoList.push(temp);
      this.state.inbox.completedList.splice(idx, 1);
    },
    addItem (state, newItem) {
      this.state.inbox.todoList.push(newItem);
      this.state.itemCount++;
    }
  }
})


