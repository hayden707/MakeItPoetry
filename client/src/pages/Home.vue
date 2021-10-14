<template>
  <div class="home">
    <div class="home-flex">
      <h1 class="home-head">make it poetry</h1>
      <div class="button-block">
      <p v-if="!$auth.isAuthenticated">sign up to save your poems</p>
      <a type="button" v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark " >Sign Up</a>
      <p v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</p>
      </div>
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

<style scoped>
  .home{
    display: flex;
    justify-content: center;
  }

  .home-flex {
    margin-top: 40px;
  }

  .home-head{
    font-family: "kaerukaeru-Regular";
  }

  .button {
    border: none;
    background: none;
    border-bottom: solid, black;
  }

  a:hover {
    color: red;
    border: solid
  }
  
</style>