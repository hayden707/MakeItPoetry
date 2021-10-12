<template>
  <div class="create-poem">
    <h3>Create Poem Page</h3>
  </div>
</template>

<script>
  export default {
    name: 'create-poem',
    components: {},
    props: {
      msg: String
      },
    methods: {
      login() {
      this.$auth.loginWithRedirect();
    }
    }
  }
</script>
