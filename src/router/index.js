import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Scores from '../views/Scores.vue'
import Students from '../views/Students.vue'
import Subjects from '../views/Subjects.vue'
import Nginx from '../Technologies/Nginx/Index.vue'
import NginxContent from '../Technologies/Nginx/NginxContentent.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Subjects',
    component: Subjects
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Scores',
    name: 'Scores',
    component: Scores
  },
  {
    path: '/Students/:id',
    name: 'Students',
    component: Students
  },
  {
    path: '/Nginx',
    name: 'Nginx',
    component: Nginx
  },
  {
    path: '/NginxContent/:id',
    name: 'NginxContent',
    component: NginxContent
  },
  //{ path: '/Students/:id', component: Students },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
