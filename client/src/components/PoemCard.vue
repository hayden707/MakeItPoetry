<template>
<div>
  <div class="poem-card">
    <div class="poem-box">
      <pre class="title">{{ title }}</pre>
      <pre>{{ poem }}</pre>
    </div>
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
    title: String,
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

  .title {
    font-weight: bold;
  }

  
</style>