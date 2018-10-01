import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "JerryChan",
      prfImg: "../assets/logo.png"
    },
    inbox:{
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
    selfList: []
  }
})


