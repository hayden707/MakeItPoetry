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
  components: { Nav }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: "kaerukaeru-Regular";
  src: local("kaerukaeru-Regular"),
  url(./fonts/kaerukaeru-Regular.woff)
}
</style>
