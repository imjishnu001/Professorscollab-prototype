<template>
  <v-app>
    <navbar />

    <v-content class="my-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components:{
    navbar: Navbar
  },
 
  data: () => ({
    //
  }),
};
</script>

<style>

</style>
