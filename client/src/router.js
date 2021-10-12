import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import CreatePoem from './pages/CreatePoem.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/createpoem', component: CreatePoem, name: 'CreatePoem' }
]

export default new VueRouter({ routes, mode: 'history' })
