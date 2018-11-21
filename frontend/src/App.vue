<template>
  <div id="app">
    <nav>
      <div id="nav">
        <a href="#" class="brand-logo left">Todo App</a>
        <ul class="right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Log in</router-link></li>
          <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
