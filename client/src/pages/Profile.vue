<template>
  <div class="profile">
  <h3>User Profile Page</h3>
  <p>{{ $auth.user.email }}</p>
  <p>{{ $auth.user.sub }}</p>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    components: {},
    props: {
      msg: String
      },
    methods: {
     
    }
  }
</script>
