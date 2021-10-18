<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>create a poem:</h3>
    <form @submit.prevent="submitText" class="text-form" v-if="showArea">
      <input type="text" placeholder="source of text (optional)" @input.prevent="handleTitle" :value="title"/>
      <textarea type="text" @input.prevent="handleContent" :value="textContent" placeholder="paste a paragraph of source text here. remove indentions and excess spacing">Paste Text Here</textarea>
      <input type="text" placeholder="your name (optional)" :value="username" class ="user-input" @input.prevent="handleUser"/>
      <button type="submit">create a poem</button>
    </form>
    <div v-if="poemCreated" class="display-poem">
      <pre>{{ this.textContent }}</pre>
      <button type="submit" @click="editPoem">edit poem</button>
      <button type="submit" @click="startOver">create a poem</button>
    </div>
    <div class="edit-poem" v-if="editing">
      <textarea type="text" :value="newPoem" @input.prevent="handleUpdateField" />
      <button type="submit" @click="submitUpdate">Edit</button>
    </div>
  </div>
  </div>
</template>

<script>
  import { CreateText } from '../services/texts'
  import { CreatePoem, UpdatePoem } from '../services/poems'
  import { CreateUser } from '../services/users'
  export default {
    name: 'create-poem',
    data: ()=>({
      texts: [],
      poemObjects: [],
      textContent: '',
      newPoem: '',
      poemCreated: false,
      showArea: true,
      title: '',
      editing: false,
      username: null,
      users: []
    }),
    props: {
      newText: Array,
      poems: Array
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
      
        const poem = await CreatePoem({
          title: this.title,
         content: this.newPoem
        })
       this.poemObjects.unshift(poem)
       
       const user= await CreateUser({
         name: this.username
       })
       this.users.unshift(user)

       },
      handleContent(e) {
        this.textContent = e.target.value
      },handleTitle(e) {
        this.title = e.target.value
      },
      handleUser(e){
        this.username = e.target.value
      },
      startOver(){
      this.poemCreated = false
      this.showArea = true
      this.texts = [],
      this.textContent = '',
      this.newPoem = '',
      this.poemCreated = false,
      this.showArea = true,
      this.title = '',
      this.editing = false
      },
      editPoem(){
      this.showArea = false
      this.poemCreated = false
      this.editing=true
      
      },
      handleUpdateField(e){
        this.newPoem = e.target.value
      },
      async submitUpdate(){
        const updatedPoem = await UpdatePoem(
          this.poemObjects[0].id, {
            content: this.newPoem
          })
      this.poemCreated = false
      this.showArea = true
      this.texts = [],
      this.textContent = '',
      this.newPoem = '',
      this.poemCreated = false,
      this.showArea = true,
      this.title = '',
      this.editing = false

      return updatedPoem
      }
     }
    }
    
  
</script>

<style  scoped>

h3 {
  margin-top: 40px
}

textarea {
  width: 300px;
  height: 150px;
  margin-top: 10px;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

textarea:hover {
  background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);
}

.user-input {
  margin-top: 10px;
  margin-bottom: 10px
}

.create-poem {
  display: flex;
  justify-content: center;
}

input {
  display: block;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}

input:hover {
  background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);
}

  button {
  display: block;
  text-align: center;
} 

button:hover {
  transform: scale(1.25)
}
</style>
