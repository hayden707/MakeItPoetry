<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>Create Poem Page</h3>
    <form @submit.prevent="submitText" class="text-form">
      <input type="text" value="Name of Text"/>
      <textarea @input.prevent="handleContent">Paste Text Here</textarea>
      <button type="submit">Create A Poem</button>
    </form>
  </div>
  </div>
</template>

<script>
  // import { CreateText } from '../services/texts'
  export default {
    name: 'create-poem',
    data: ()=>({
      textContent: ''
    }),
    components: {},
    props: {},
    methods: {
     
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
