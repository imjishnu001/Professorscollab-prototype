<template>
  <div class="subjects">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3>
          <v-card class="text-xs-center ma-3" route to="/Git">
            
            <v-card-text>
              <h1>Git</h1>
            </v-card-text>
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="16/16" src="../assets/git.png"></v-img>
            </v-responsive>
            <hr>
            <v-card-title>
              <a  class="ml-10"><h3>By: Avinash Singh</h3></a>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 >
          <v-card class="text-xs-center ma-3" route to="/Nginx">
            <v-card-text>
              <h1>Nginx Server</h1>
            </v-card-text>
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="16/16" src="../assets/nginx.png"></v-img>
            </v-responsive>
            <hr>
            <v-card-title>
              <a class="ml-10"><h3>By: Avinash Singh</h3></a>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped>
hr{
  color: gray;
}
</style>