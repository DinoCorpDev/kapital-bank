const credit = {
  namespaced: true,
  state: {
    creditInfo: null
  },
  mutations: {
    SET_CREDIT_INFO(state, payload) {
      state.creditInfo = payload;
    }
  },
  actions: {
    setCreditInfo({ commit }, data) {
      commit('SET_CREDIT_INFO', data);
    }
  }
};

export default credit;
