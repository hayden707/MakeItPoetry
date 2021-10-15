<template>
  <div class="signin" >
  <form @submit.prevent="signin">
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
        <button type="submit" @click="testState">
          Signin
        </button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'signin',
  data: ()=>({
    email: '',
    password: '',
    currentUser: String
  }),
  methods: {
    handleEmail(e) {
      this.email=e.target.value
    },
    handlePassword(e) {
      this.password=e.target.value
    },
    testState(){
      this.$user.cart.currentUser = "Bob"
      console.log(this.$user.cart.currentUser)
    }



    // async signin(){
    //   const payload = await SignInuser(this.email, this.password)



      // const newUser = await RegisterUser({
      //   name: this.name,
      //   email: this.email,
      //   password: this.password
      // }); 
      // this.name = '',
      // this.email = '',
      // this.password = ''
      // this.$router.push('/signin')
      // return newUser
    // } 
  }
}
</script>
