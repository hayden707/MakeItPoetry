<template>
  <div class="create-poem">
    <div class="flex>">
    <h3>Create Poem Page</h3>
    <form>
      <input type="text" value="Name of Text" />
      <textarea>Paste Text Here</textarea>
      <button>Create A Poem</button>
    </form>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'create-poem',
    components: {},
    props: {},
    methods: {
      
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
