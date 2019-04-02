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
              <v-radio :label="foo.correct_answer" value="correct_answer" type="success"></v-radio>
            </v-radio-group>
          </v-list>
        </v-container>
      </v-flex>
      <v-container v-if="qr">
        <vue-qr :bgSrc=src :logoSrc='src2' text="Usted ha sido promovido" :size="400"></vue-qr>
      </v-container>
      <v-container v-if="showBtn">
        <v-btn color="success" @click="qr = !qr">Evaluar</v-btn>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import VueQr from 'vue-qr';
export default {
  components: {
    VueQr
  },
  name: 'Questions',
  data () {
    return {
      info: null,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elsevier.svg/1200px-Elsevier.svg.png",
      logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elsevier.svg/1200px-Elsevier.svg.png",
      qr: false,
      showBtn: true
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
          amount: 15,
          category: category
        }
      })
      .then(response => (this.info = response));
      showBtn = true
    },
    test(dataUrl,id){
           console.log(dataUrl, id)
       }
  },
}
</script>

<style lang="css" scoped>
.question {

}
</style>
