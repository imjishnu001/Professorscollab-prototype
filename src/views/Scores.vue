<template>
  <div class="dashboard">
    <v-container>
      <v-layout row justify-space-around>
              <v-flex xs9 md3>
              <v-card v-for="student in students" v-bind:key="student.name" route v-bind:to="`/Students/${student.name}`">
                    <v-layout row :class="['pa-3', (student.marks > 7) ? passClass : failClass]">
                        <v-flex xs12 md6>
                            <div class="caption grey--text">
                                Student Name
                            </div>
                            <div>{{student.name}}</div>
                        </v-flex>
                        <v-flex xs12 md6>
                            <div class="caption grey--text">
                                Marks
                            </div>
                            <div>{{student.marks}}</div>
                        </v-flex>
                      </v-layout>
        
                </v-card>
                </v-flex>
          </v-layout>
      
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      students:[
        {name:'Arun Kumar',marks:8},
        {name:'Rahul Bose',marks:10},
        {name:'Jay Singh',marks:9},
        {name:'Suhail Ahemad',marks:2},
        {name:'Santosh Kumar',marks:8},
        {name:'Akhila Thumati',marks:10},
        {name:'Aknita Mishra',marks:9},
        {name:'Shubham Madan',marks:2},
      ],
      passClass:'pass',
      failClass:'fail',
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
