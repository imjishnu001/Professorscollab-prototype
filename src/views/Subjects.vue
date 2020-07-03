<template>
  <div class="subjects">
    <v-container class="my-5">
      <v-layout row wrap>
        <!--<v-flex xs12 sm6 md4 lg3>
          <v-card class="text-xs-center ma-3" route to="/Git">
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="4/4" src="../assets/git.png"></v-img>
            </v-responsive>
            <v-card-text>
              <h1>Git</h1>
            </v-card-text>
          </v-card>
        </v-flex>-->
        <v-flex xs12 sm6 md4 lg3 >
          <v-card class="text-xs-center ma-3" route to="/Nginx">
            <v-responsive class="pt-4">
              <v-img :aspect-ratio="4/4" src="../assets/nginx.png"></v-img>
            </v-responsive>
            <v-card-text>
              <h1>Nginx Server</h1>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>