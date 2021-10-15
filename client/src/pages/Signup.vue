<template>
  <div class="signout-page">
    <h3>:) signup page (:</h3>
    <form @submit.prevent="submit">

      <div>
        <label for="name">
          name
        </label>
        <input type="text" name="name" id="name" v-model="form.name">
      </div>

      <div>
        <label for="email">
          email
        </label>
        <input type="text" name="email" id="email" v-model="form.email">
      </div>
      
      <div>
        <label for="password">
          Password
        </label>

        <input type="password" name="password" id="password" v-model="form.password">
      </div>

      <div>
        <button type="submit">
          Signin
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'signup',
  components: {},
  data(){
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }

  },
  methods: {
    async submit(form){
      let res = axios.post('http://localhost:3000/auth/register', form)
      console.log(res.data)
    }
  }
}
</script>
