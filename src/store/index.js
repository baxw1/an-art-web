import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  getters: {
  },
  mutations: {
    countchange(state, val){
      state.count = state.count + val
    }
  },
  actions: {
  },
  modules: {
  }
})
