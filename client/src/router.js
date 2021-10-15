import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import CreatePoem from './pages/CreatePoem.vue'
import Feed from './pages/Feed.vue'
import Profile from './pages/Profile.vue'
import Signin from './pages/Signin.vue'
import Signout from './pages/Signout.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/createpoem', component: CreatePoem, name: 'CreatePoem' },
  { path: '/feed', component: Feed, name: 'Feed' },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile'
  },
  { path: '/signin', component: Signin, name: 'Signin' },
  { path: '/signout', component: Signout, name: 'Signout' }
]

export default new VueRouter({ routes, mode: 'history' })
