<template>
  <!-- <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
  </nav> -->

<nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <a class="navbar-item" href="/">
        <strong class="is-size-4">Animal Rescue League</strong>
      </a> -->
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
      <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <div v-if="!$auth.loading">
        <!-- show login when not authenticated -->
            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark">
              <strong>Sign in</strong></a>
        <!-- show logout when authenticated -->
        <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong>
        </a>
      </div>
      </div>
    </div>
    </div>
    </div>
  </nav>


  
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style scoped>
.link {
  margin: 0 10px;
}
</style>