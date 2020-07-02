<template>
    <nav>
        <v-toolbar class="primary" app>
            <v-icon class="ml-5 white--text" @click.stop="drawer = !drawer">mdi-menu</v-icon>
            <span class="ml-5 white--text">Professors Collab</span>
            <v-spacer></v-spacer>
            <v-toolbar-title class="ml-5 white--text">
                <span>Prototype</span>
            </v-toolbar-title> 
            
               
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary" temporary>
            <v-img :aspect-ratio="16/9" src="https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/10452385_783147738438445_7940738305806600244_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=leEOCFhCGqYAX_wlhyM&_nc_ht=scontent.fblr2-1.fna&oh=cbf5bb599a76be653ed455933844a8a6&oe=5F22BB71">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">Jishnu Mohan</div>
            <div class="body-1">Jishnu@gmail.com</div>
          </v-col>
        </v-row>
      </v-img>
            <v-list-item v-for="link in links" :key="link" route :to="link.route">
                <v-list-item-icon>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer: false,
            links: [
                {icon:'mdi-book',text:'Subjects',route:'/'},
                {icon:'mdi-view-dashboard',text:'Dashboard',route:'/Dashboard'},
                {icon:'mdi-account-tie',text:'Profile',route:'/Profile'},
            ]
        }
    }
}
</script>