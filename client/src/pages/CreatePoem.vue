<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>Create Poem Page</h3>
    <form @submit.prevent="submitText" class="text-form">
      <!-- <input type="text" value="Name of Text"/> -->
      <textarea type="text" @input.prevent="handleContent" :value="textContent">Paste Text Here</textarea>
      <button type="submit">Create A Poem</button>
    </form>
    <pre>{{ this.textContent }}</pre>
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

       this.textContent = this.textContent.split(' ');

        let newArr = []

        while (newArr.length < 20){
          newArr.push(this.textContent[Math.floor(Math.random()*this.textContent.length)])
        }

        newArr.splice(5, 0, "\n")
        newArr.splice(10, 0, "\n")
        newArr.splice(15, 0, "\n")
        newArr.splice(20, 0, "\n")

        this.textContent = newArr.join(' ')
              
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
