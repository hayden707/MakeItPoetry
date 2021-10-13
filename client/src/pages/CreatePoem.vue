<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>Create Poem Page</h3>
    <form @submit.prevent="submitText" class="text-form">
      <!-- <input type="text" value="Name of Text"/> -->
      <textarea type="text" @input.prevent="handleContent" :value="textContent">Paste Text Here</textarea>
      <button type="submit">Create A Poem</button>
    </form>
    <p>{{ this.textContent }}</p>
  </div>
  </div>
</template>

<script>
  import { CreateText } from '../services/texts'
  export default {
    name: 'create-poem',
    data: ()=>({
      texts: [],
      textContent: '',
      newPoem: ''
    }),
    props: {
      newText: Array
    },
    components: {},
    methods: {
     async submitText(){
       const text = await CreateText({
         content: this.textContent
       })
       this.texts.unshift(text)
      
       },
      handleContent(e) {
        this.textContent = e.target.value
      }
     }
    }
    
  
</script>

<style  scoped>

.create-poem {
  display: flex;
  justify-content: center;
}

input {
  display: block;
}

  button {
  display: block;
  text-align: center;
} 
</style>
