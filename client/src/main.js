import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

const user = Vue.observable({
  cart: {
    currentUsers: 'Hayden',
    add(currentUser) {
      user.cart.currentUsers.push(currentUser)
    }
  }
})

Vue.prototype.$user = user

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
