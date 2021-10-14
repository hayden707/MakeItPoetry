<template>
  <div class="profile">
  <h3>User Profile Page</h3>
  <p>{{ $auth.user.email }}</p>
  <p>{{ $auth.user.user_id }}</p>
   <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
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
