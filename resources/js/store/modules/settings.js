const settings = {
  namespaced: true,
  state: {
    toggled: false
  },
  mutations: {
    SET_TOGGLED(state) {
      state.toggled = !state.toggled;
    },
  },
  actions: {
    setToggled({ commit }) {
      document.querySelector('body')?.classList.toggle('sidebar-toggled');
      document.querySelector('.sidebar')?.classList.toggle('toggled');
      commit('SET_TOGGLED');
    },
  }
};

export default settings;
