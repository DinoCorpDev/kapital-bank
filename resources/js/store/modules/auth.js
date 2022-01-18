import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    authUser: {
      name: '',
    },
    isLoggedIn: false,
    userRole: null,
  },
  mutations: {
    SET_USER_DATA(state, payload) {
      state.authUser = payload;
    },
    SET_IS_LOGGED_IN_DATA(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_USER_ROLE(state, payload) {
      state.userRole = payload;
    },
  },
  actions: {
    setIsLoggedIn(value){
      commit('SET_IS_LOGGED_IN_DATA', value);
    },
    async getAuthUser({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/user')
          .then(res => {
            commit('SET_USER_DATA', res.data);
            commit('SET_USER_ROLE', res.data.roles[0].name);
            commit('SET_IS_LOGGED_IN_DATA', true);
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default auth;
