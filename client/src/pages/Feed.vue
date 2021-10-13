<template>
  <div class="feed">
    <PoemCard 
    v-for="poem in poemList" :key="poem.id" :poem="poem.content" :poemList="poemList"/>
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
