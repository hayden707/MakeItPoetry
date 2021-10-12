<template>
  <div class="home">
  <h3>You are Home!!!!</h3>
  <div class="button-block">
  <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Keep Track of Your Poems</button>
  <h5 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h5>
</div>
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
