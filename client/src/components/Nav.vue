<template>
 <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div id="navbar" class="navbar-menu">
      <div class="flex-bar">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">home</router-link>
        <router-link to="/createpoem" class="navbar-item">create a poem</router-link>
        <router-link to="/feed" class="navbar-item">poems</router-link>
        <router-link to="/about" class="navbar-item">about</router-link>
      </div>
    </div>
    </div>
  </nav>


  
</template>

<script>
export default {
  name: 'Nav',
  methods: {}
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

.navbar-item {
  margin-left: 10px;
  margin-right: 10px
}



</style>