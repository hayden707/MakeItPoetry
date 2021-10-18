<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: { Nav },
  data: ()=>({
    user: null,
    authenticated: false
  })
}
</script>

<style>

body {
background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
min-height: 100vh;
}

#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px; 

  /* added styles */
  
}

@font-face {
  font-family: "kaerukaeru-Regular";
  src: local("kaerukaeru-Regular"),
  url(./fonts/kaerukaeru-Regular.woff)
}

button {
  color: white;
  background-color: black;
  border-radius: 8px
}
</style>
