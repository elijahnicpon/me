import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedFile: null,
  },
  mutations: {
    setSelectedFile(state, file) {
      state.selectedFile = file;
    },
  },
});
