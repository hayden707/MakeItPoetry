<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>Create Poem Page</h3>
    <form @submit.prevent="submitText" class="text-form" v-if="showArea">
      <!-- <input type="text" value="Name of Text"/> -->
      <textarea type="text" @input.prevent="handleContent" :value="textContent">Paste Text Here</textarea>
      <button type="submit">Create A Poem</button>
    </form>
    <div v-if="poemCreated" class="display-poem">
      <pre>{{ this.textContent }}</pre>
      <button type="submit" @click="submitPoem" >Save Poem</button>
      <button type="submit" @click="newPoem">Create a New Poem</button>
    </div>
  </div>
  </div>
</template>

<script>
  import { CreateText } from '../services/texts'
  import { CreatePoem } from '../services/poems'
  import { CreateUser } from '../services/users'
  export default {
    name: 'create-poem',
    data: ()=>({
      texts: [],
      textContent: '',
      newPoem: '',
      poemCreated: false,
      showArea: true,
      auth: ''
    }),
    props: {
      newText: Array,
      poems: Array,
      users: Array
    },
    components: {},
    methods: {
     async submitText(){
       const text = await CreateText({
         content: this.textContent,
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
        this.newPoem = this.textContent

        this.poemCreated = true
        this.showArea = false
        this.auth = this.$auth.user.sub
              
       },
      handleContent(e) {
        this.textContent = e.target.value
      },
      async submitPoem(){

        const poem = await CreatePoem({
         content: this.newPoem,
         user_auth: this.auth
       })
        const user= await CreateUser({
         name: this.auth,
         auth: this.auth
       })
       return poem, user
      }
      ,
      newPoem(){
      this.poemCreated = false,
      this.showArea = true
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
