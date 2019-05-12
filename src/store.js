import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
  },
  actions: {
    signup({ commit }, authData) {
      axios
        .post('/signupNewUser?key=AIzaSyCdda--8QdPCxPKcWWlMkB_q2B4VujdA8k', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then(response => {
          console.log(response);
          commit('authUser', { token: response.data.idToken, userId: response.data.localId });
        })
        .catch(error => console.log(error));
    },
    login({ commit }, authData) {
      axios
        .post('/verifyPassword?key=AIzaSyCdda--8QdPCxPKcWWlMkB_q2B4VujdA8k', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then(response => {
          console.log(response);
          commit('authUser', { token: response.data.idToken, userId: response.data.localId });
        })
        .catch(error => console.log(error));
    },
  },
  getters: {},
});
