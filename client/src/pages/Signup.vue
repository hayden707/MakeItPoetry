<template>
  <div class="signout-page">
    <h3>:) signup page (:</h3>
    <form @submit.prevent="register">

      <div>
        <label for="name">
          name
        </label>
        <input type="text" name="name" id="name" @input.prevent="handleName" @value="name">
      </div>

      <div>
        <label for="email">
          email
        </label>
        <input type="text" name="email" id="email" @input.prevent="handleEmail" @value="email">
      </div>
      
      <div>
        <label for="password">
          Password
        </label>

        <input type="password" name="password" id="password" @input.prevent="handlePassword" @value="password">
      </div>

      <div>
        <label for="confirm-password">
          Confirm Password
        </label>

        <input type="confirm-password" name="confirm-password" id="confoirm-password" @input.prevent="hanldeConfirmPassword" @value="confirmPassword">
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
import { RegisterUser } from '../services/auth.js'

export default{
  name: 'signup',
  components: {},
  data: ()=>({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
  methods: {
    handleName(e) {
        this.name = e.target.value
      },
    handleEmail(e) {
      this.email=e.target.value
    },
    handlePassword(e) {
      this.password=e.target.value
    },
    hanldeConfirmPassword(e){
      this.confirmPassword = e.target.value
    },
    async register(){
      const newUser = await RegisterUser({
        name: this.name,
        email: this.email,
        password: this.password
      }); 
      this.name = '',
      this.email = '',
      this.password = ''
      this.$router.push('/signin')
      return newUser
    } 
    
  }
}

</script>