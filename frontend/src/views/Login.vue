<template>
  <div id="login" class="container">
    <h3>Login</h3>
    <form @submit.prevent='loginPost()'>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <p style="color: red;">{{this.invalid}}</p>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login',  
  mounted() {
    if (localStorage.token) {
      this.$router.push('/404');
    }
  },
  data: () => ({
      username: "",
      password: "",
      invalid: "",
  }),
  methods: {
    loginPost() {
      if(this.username && this.password) {
        const API_URL = 'http://localhost:5000/auth/user/login';
        const sendData = {
          username: this.username,
          password: this.password
        };
      axios.post(API_URL, sendData)
      .then(resp => {
        localStorage.token = resp.data.token;
        this.$router.push('/')
        location.reload();
      })
      .catch(err => {
        console.log(err);
        this.invalid = 'Invalid credentials'
      });
      } else {
        this.invalid = 'Please enter a username and password to continue'
      }
    }
  }
}
</script>
