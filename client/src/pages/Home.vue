<template>
  <div class="home">
    <div class="home-flex">
      <h1 class="home-head">make it poetry</h1>
      <div class="button-block">
      <p>sign up to save your poems</p>
      <a type="button" @click="login">Sign Up</a>
      <p>Welcome {{ $user.cart.currentUsers }}</p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    props: {},
    methods: {
    //   login() {
    //   this.$auth.loginWithRedirect();
    // }
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