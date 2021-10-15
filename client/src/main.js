import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import { domain, clientId, audience } from '../auth_config.json'

import { Auth0Plugin } from './auth'

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
