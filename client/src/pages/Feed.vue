<template>
  <div class="feed">
    <div class="poem-list">
    <PoemCard 
    v-for="poem in poemList" :key="poem.id" :poem="poem.content" :title="poem.title" :poemList="poemList"/>
  </div>
  </div>
</template>

<script>
  import { GetPoems } from '../services/poems'
  import PoemCard from '../components/PoemCard.vue'
  export default {
    name: 'feed',
    components: {PoemCard},
    props: {
      poemList: []
      },
    mounted(){
      this.fetchPoems()
    },
    methods: {
     async fetchPoems(){
       const poems = await GetPoems()
       this.poemList = poems
     }
    }
  }
</script>

<style  scoped>
  .poem-list {
    margin-top: 60px
  }
</style>