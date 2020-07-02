<template>
  <div class="dashboard">
      <v-container>
      <v-layout row wrap>
        <v-flex xs2 md8></v-flex>
        <v-flex xs9 md4>
          <h1 class="primary--text"><h1>{{$route.params.id}}</h1></h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-5">
      <v-card v-for="question in questions" v-bind:key="question.question">
          <v-layout row wrap :class="['pa-3', (question.answer === question.correctAnswer) ? passClass : failClass]">
              <v-flex xs12 md6>
                  <div class="caption grey--text">
                    Question
                  </div>
                  <div>{{question.question}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">
                    Answer
                  </div>
                  <div>{{question.answer}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">
                    Correct Answer
                  </div>
                  <div>{{question.correctAnswer}}</div>
              </v-flex>
          </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      questions:[
        {question:'Question 1',answer:'C',correctAnswer:'A'},
        {question:'Question 2',answer:'B',correctAnswer:'B'},
        {question:'Question 3',answer:'B',correctAnswer:'B'},
        {question:'Question 4',answer:'C',correctAnswer:'C'},
        {question:'Question 5',answer:'D',correctAnswer:'A'},
        {question:'Question 6',answer:'A',correctAnswer:'B'},
        {question:'Question 7',answer:'A',correctAnswer:'B'},
        {question:'Question 8',answer:'B',correctAnswer:'B'},
        {question:'Question 9',answer:'C',correctAnswer:'C'},
        {question:'Question 10',answer:'D',correctAnswer:'D'},
      ],
      passClass:'pass',
      failClass:'fail',
    }
  },
  computed:{
      getUrl: function(){
          return console.log(this.$router.query)
      }
  }
   
}
</script>

<style>
.pass{
  border-left: 8px solid green;
}
.fail{
  border-left: 8px solid red;
}

</style>
