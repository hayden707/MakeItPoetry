<template>
<div>
  <div class="poem-card">
    <div class="poem-box">
      <pre class="title">{{ title }}</pre>
      <pre>{{ poem }}</pre>
      <button type="submit" @click="poemDelete">X</button>
    </div>
  </div>
  <div class="flex">
  <p class="squiggles">~~~~~~~~~~</p>
  </div>
  </div>
</template>

<script>
import { DeletePoem } from '../services/poems'

export default {
  name: "PoemCard",
  data: ()=>({
    renderKey: 0
  }),
  props:{
    id: Number,
    title: String,
    poem: Object,
    poemList: Array
    },
  methods: {
    async poemDelete(){
        const deletedPoem = await DeletePoem(this.id)
        this.renderKey += 1
        return deletedPoem
      }
  }
}
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

  button {
    font-size: 8px;
  }

  
</style>