import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    apiUrl: 'https://opentdb.com/api.php'
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload;
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
    }
  },
});
