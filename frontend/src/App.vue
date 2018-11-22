<template>
  <div id="app">
    <nav>
      <div id="nav">
        <a href="#" class="brand-logo left">Todo App</a>
        <ul class="right">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="loggedOut"><router-link to="/login">Log in</router-link></li>
          <li v-if="loggedOut"><router-link to="/signup">Sign Up</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
  export default {
    computed: {
      loggedOut: function() {
        if (localStorage.token) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>
<style>

</style>
