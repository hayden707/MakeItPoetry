<template>
  <div class="home">
    <div class="home-flex">
      <h1 class="home-head">make it poetry</h1>
      <div class="button-block">
      <a type="button" @click="routeCreate">click here to make a poem</a>
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
      routeCreate() {
         this.$router.push('/createpoem')
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
    h1:hover {
      transform: scale(2);
    }

  button {
    border: none;
    background: none;
    border-bottom: solid, black;
  }

  a:hover {
    color: red;
    border: solid;
    animation: shake 0.5s;
    transform: scale(2)
  }

  
  
</style>