import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    apiUrl: 'https://opentdb.com/api.php'
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
     async getQuestions({ state, commit }, category) {
      try {
        console.log(state.apiUrl);
        let response = await axios.get(state.apiUrl, {
          params: {
            amount: 30,
            category: category
          }
        });
        commit('setQuestions', response);
      } catch(error) {
        commit('setQuestions', [error]);
      }
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false)
        });
    }
  },
});
