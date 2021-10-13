<template>
<div>
  <div class="poem-card">
    <pre>{{ poem }}</pre>
  </div>
  <div class="flex">
  <p class="squiggles">~~~~~~~~~~</p>
  </div>
  </div>
</template>

<script>

export default {
  name: "PoemCard",
  props:{
    poem: Object,
    poemList: Array
}}
</script>

<style scoped>
.flex {
    display: block;
    text-align: center;
 
  }
  .poem-card {
    display: flex;
    justify-content: center;
  }

  
</style>