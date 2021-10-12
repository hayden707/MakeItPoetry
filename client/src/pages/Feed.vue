<template>
  <div class="feed">
  <h3>This is the feed</h3>
  </div>
</template>

<script>
  export default {
    name: 'feed',
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
