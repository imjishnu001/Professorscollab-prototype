<template>
    <nav>
        <v-toolbar class="primary" app>
            <!--<v-icon class="ml-5 white--text" @click.stop="drawer = !drawer">mdi-menu</v-icon>-->
            <span class="ml-5 white--text">Professors Collab</span>
            <v-spacer></v-spacer>
            <v-toolbar-title class="ml-5 white--text">
                <span>Early Access</span>
            </v-toolbar-title> 
            
               
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary" temporary>
            <v-img :aspect-ratio="16/9" src="profile.png">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">Welcome</div>
          </v-col>
        </v-row>
      </v-img>
            <v-list-item v-for="link in links" :key="link" route :to="link.route" class="mt-5">
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
                //{icon:'mdi-view-dashboard',text:'Dashboard',route:'/Dashboard'},
                //{icon:'mdi-account-tie',text:'Profile',route:'/Profile'},
            ]
        }
    }
}
</script>