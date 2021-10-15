<template>
  <div class="signin">
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
        <button type="submit">
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
    password: ''
  }),
  methods: {
    handleEmail(e) {
      this.email=e.target.value
    },
    handlePassword(e) {
      this.password=e.target.value
    }
  }
}
</script>
