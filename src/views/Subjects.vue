<template>
  <div class="subjects">
    {{visitor()}}
    <h1 class="grey--text ma-5">
      Set - 1 : Introduction to Web " Deployment "<br/>
    </h1>
    <p class="grey--text ma-7">
      The subset of this course will introduce you to the fundamentals of Version control system, Web technologies and how to deploy your web apps to a dedicated server running on Ubuntu. This early access contains training module, which is a subset of " Professors Index Tracking System", to help us test our tracking algorithm if you choose, you can participate in our " We upload program ", <br/><br/>
      Note: Video tutorials will be published soon along with text tutorials.<br/>
      This early access portal will be live for 4 months, throughout this period, new content and features will be constantly added. <br/>
    </p>
    <h1 class="grey--text ma-5"> Click on topic name to start</h1>
    <v-container class="my-5" style="display:flex;align-items:center;">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="text-xs-center ma-3" route to="/SimpleWebGame" style="min-height:250px;">
            <v-card-text>
              <h1>A Simple Web App</h1>
            </v-card-text>
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="16/7" max-width="400px" src="../assets/Webapp.png"></v-img>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="text-xs-center ma-3" route to="/Git" style="min-height:250px;">
            <v-card-text>
              <h1>Git / Github</h1>
            </v-card-text>
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="16/9" src="../assets/git.png"></v-img>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 >
          <v-card class="text-xs-center ma-3" route to="/Nginx" style="min-height:250px;">
            <v-card-text>
              <h1>Nginx Server</h1>
            </v-card-text>
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="16/9" src="../assets/nginx.png"></v-img>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script> 
export default{
  data(){
    return{

    }
  },
  methods:{
    visitor: function(){
      let dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let visitor = window.location.href.toString().slice(7).slice(0,-1);
      let page = this.$route.name;
       fetch('https://professorscollab.xyz:8443/api/visitor',{
        method:'POST',
        body: JSON.stringify({ 
        visitor: visitor, 
        page: page, 
        dateTime: dateTime 
        }), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      return; 
    }
  }
}
</script>
<style scoped>
hr{
  color: gray;
}
</style>