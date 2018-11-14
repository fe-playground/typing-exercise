import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    name: '',
    start: false
  },
  mutations: {
    UPDATE_NAME (state, payload) {
      state.name = payload
    },
    SET_START (state, payload) {
      if( state.name !== '' ) {
        state.start = payload
      } else {
        alert('이름을 입력하세요')
      }
    }
  }
})

export default store