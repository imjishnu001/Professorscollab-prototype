<template>
  <div class="dashboard">
    <v-container>
      <v-layout row wrap>
        <v-flex xs2 md8></v-flex>
        <v-flex xs9 md4>
          <h1 class="primary--text">Total Points:{{getTotalPoints}}</h1>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container class="my-5">
      <v-card v-for="exam in exams" v-bind:key="exam.title" route to="/Scores">
          <v-layout row wrap :class="['pa-3', (((exam.completed + exam.failed) / 2) <= exam.completed) ? passClass : failClass]">
              <v-flex xs12 md6>
                  <div class="caption grey--text">
                    Test Title
                  </div>
                  <div>{{exam.title}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">
                    Completed
                  </div>
                  <div>{{exam.completed}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">
                    Failed
                  </div>
                  <div>{{exam.failed}}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                  <div class="caption grey--text">
                    Total
                  </div>
                  <div>{{exam.total}}</div>
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
      exams:[
        {title:'Web server with Nginx',completed:23,failed:3, total:173},
        {title:'Vue Js Fundamentals',completed:25,failed:1, total:193},
        {title:'Vue Js + Vuex Statemanagemnt',completed:26,failed:0, total:201},
      ],
      passClass:'pass',
      failClass:'fail',
      totalPoint:0
    }
  },
  computed:{
    getTotalPoints(){
      this.exams.forEach(exam => {
        this.totalPoint += exam.total
        console.log(exam.total)
      });
      return this.totalPoint
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
