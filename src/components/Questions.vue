<template lang="html">
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg10 v-for="question in questions">
        <v-container v-for="(foo, index) in question.results">
          <v-toolbar color="indigo" dark>
         <v-toolbar-title v-html="foo.question">
           <span>{{index}}</span>
         </v-toolbar-title>


       </v-toolbar>
       <v-list>
         <v-radio-group>
           <v-radio
        v-for="distractor in foo.incorrect_answers"
        :key="distractor"
        :label="distractor"
        :value="distractor"
      ></v-radio>
      <v-radio :label="foo.correct_answer" value="correct_answer" @click="" type="success"></v-radio>
          </v-radio-group>
       </v-list>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Questions',
  data () {
    return {
      info: null
    }
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    }
  },
  methods: {
    fetchQuestions(category) {
      axios.get('https://opentdb.com/api.php?&ype=multiple', {
        params: {
          amount: 30,
          category: category
        }
      })
      .then(response => (this.info = response))
    }
  },
}
</script>

<style lang="css" scoped>
.question {

}
</style>
