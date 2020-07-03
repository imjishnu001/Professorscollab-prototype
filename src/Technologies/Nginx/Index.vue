<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-card v-for="topic in topics" v-bind:key="topic.title" route :to="`/NginxContent${topic.route}`">
      <v-layout row wrap :class="['pa-3 topic', (topic.available) ? availableClass : notavailableClass]" justify-center="">
              <v-flex xs12 md3>
                  <h2 :class="[(topic.available) ? 'success--text' : 'grey--text']">{{topic.group}}</h2>
              </v-flex>
              <v-flex xs12 md7>
                  <h2 :class="[(topic.available) ? 'success--text' : 'grey--text']">{{topic.title}}</h2>
              </v-flex>
              <v-flex xs12 md2>
                  <div v-if="topic.available">
                    <v-btn fab class="transparent outline">
                      <v-icon class="success--text">
                        mdi-arrow-right-bold-outline
                      </v-icon>
                    </v-btn> 
                  </div>
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
        {title:'Introduction Web servers',group:'Topic 1',available:true,route:'/1'},
        {title:'Ports',group:'Topic 1.1',available:true,route:'/2'},
        {title:'Sever functionalities',group:'Topic 1.2',available:true,route:'/3'},
        {title:'Most used web server softwares',group:'Topic 1.3',available:false,route:'/4'},
        {title:'Getting start with Nginx',group:'Topic 1.4',available:false,route:'/5'},
        {title:'Installing Nginx',group:'Topic 2',available:false,route:'/6'},
        {title:'Nginx Config Overview',group:'Topic 2.1',available:false,route:'/7'},
        {title:'Nginx to serve static files',group:'Topic 2.2',available:false,route:'/8'},
        {title:'Nginx internal routes',group:'Topic 2.3',available:false,route:'/9'},
        {title:'Adding SSL with LetsEncrypt',group:'Topic 2.3',available:false,route:'/10'},
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
