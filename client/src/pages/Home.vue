<template>
  <div class="home">
  <div class="button-block">
  <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
  <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>
</div>
  <h3>You are Home!!!!</h3>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    props: {
      msg: String
      },
    methods: {
      login() {
      this.$auth.loginWithRedirect();
    }
    }
  }
</script>
