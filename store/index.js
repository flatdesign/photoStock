import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarStatus: false,
    },
    getters: {
      getSideBarStatus(state) {
        return state.sideBarStatus;
      }
    },
    mutations: {
      setSideBarStatus(state, status) {
        state.sideBarStatus = status;
      }
    },
    actions: {
    }
  })
}

export default createStore;
