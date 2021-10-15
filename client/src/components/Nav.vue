<template>
  <!-- <nav>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
  </nav> -->

<nav class="navbar container" role="navigation" aria-label="main navigation">
    <!-- <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Animal Rescue League</strong>
      </a>
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
    </div> -->
    <div id="navbar" class="navbar-menu">
      <div class="flex-bar">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/createpoem" class="navbar-item">Create A Poem</router-link>
        <router-link to="/feed" class="navbar-item">Poems</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/profile" class="navbar-item">Profile</router-link>
        <router-link to="/signin" class="navbar-item">Sign In</router-link>
        <router-link to="/signout" class="navbar-item">Sign Out</router-link>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
      
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
    // login() {
    //   this.$auth.loginWithRedirect();
    // },
    // Log the user out
    // logout() {
    //   this.$auth.logout({
    //     returnTo: window.location.origin
    //   });
    // }
  }
}
</script>

<style scoped>
.link {
  margin: 0 10px;
}

.flex-bar{
  display: flex;
  justify-content: center;
}


</style>