<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-card v-for="topic in topics" v-bind:key="topic.title">
          <v-layout row wrap class="pa-3 topic" justify-center="">
              <v-flex xs12 md2>
                  <div class="caption grey--text">
                    Group
                  </div>
                  <h2 class="primary--text">{{topic.group}}</h2>
              </v-flex>
              <v-flex xs12 md4>
                  <div class="caption grey--text">
                    Title
                  </div>
                  <h2 class="primary--text">{{topic.title}}</h2>
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
      topics:[
        {title:'Introduction Web servers',group:'Week 1'},
        {title:'Web server functionalities ',group:'Week 1'},
        {title:'Introduction to Nginx',group:'Week 1'},
        {title:'Nginx vs Apache',group:'Week 1'},
        {title:'Nginx Features',group:'Week 1'},
        {title:'Over View of Nginx Config file',group:'Week 2'},
      ],
    }
  },  
}
</script>

<style>
.topic{
  border-left: 8px solid orange;
}


</style>
