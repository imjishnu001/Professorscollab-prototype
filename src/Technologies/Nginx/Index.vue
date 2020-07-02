<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-card v-for="topic in topics" v-bind:key="topic.title">
          <v-layout row wrap :class="['pa-3 topic', (topic.available) ? availableClass : notavailableClass]" justify-center="">
              <v-flex xs12 md2>
                  <div class="caption grey--text">
                    Group
                  </div>
                  <h2 :class="[(topic.available) ? 'primary--text' : 'grey--text']">{{topic.group}}</h2>
              </v-flex>
              <v-flex xs12 md4>
                  <div class="caption grey--text">
                    Title
                  </div>
                  <h2 :class="[(topic.available) ? 'primary--text' : 'grey--text']">{{topic.title}}</h2>
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
        {title:'Introduction Web servers',group:'Topic 1',available:true},
        {title:'Web server functionalities ',group:'Topic 1.1',available:true},
        {title:'Introduction to Nginx',group:'Topic 1.2',available:false},
        {title:'Nginx vs Apache',group:'Topic 1.3',available:false},
        {title:'Nginx Features',group:'Topic 1.4',available:false},
        {title:'Over View of Nginx Config file',group:'Topic 2',available:false},
      ],
      availableClass: 'availableClass',
      notavailableClass: 'notavailableClass',
    }
  },  
}
</script>

<style>
.topic.availableClass{
  border-left: 8px solid green;
}
.topic.notavailableClass{
  border-left: 8px solid gray;
}

</style>
