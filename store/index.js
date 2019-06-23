import Vuex from 'vuex';
import photos from '@/store/photos';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      photos,
    },
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
