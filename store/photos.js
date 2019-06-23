export default {
  namespaced: true,
  state: {
    photos: []
  },
  getters: {
    getPhotos(state) {
      return state.photos;
    },
  },
  mutations: {
    setPhotos(state, photos) {
      state.photos = photos;
    }
  }
}