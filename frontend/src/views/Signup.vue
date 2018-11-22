<template>
  <div id="signup" class="container">
    <h3>Signup</h3>
    <form @submit.prevent='signupPost()'>
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
    name: 'signup',
    mounted() {
      if (localStorage.token) {
        this.$router.push('/');
      }
    },
    data: () => ({
      username: "",
      password: "",
      invalid: "",
    }),
    methods: {
      signupPost() {
        if(this.username && this.password) {
          const API_URL = 'http://localhost:5000/auth/user/signup';
          const sendData = {
            username: this.username,
            password: this.password
          };
        axios.post(API_URL, sendData)
        .then(resp => {
          this.username = '';
          this.password = '';
          this.invalid = '';
          this.$router.push('/login');
        })
        .catch(err => {
          this.invalid = 'That username is taken. Please choose another one'
        });
        } else {
          this.invalid = 'Please enter a username and password to continue'
        }
      }
    },
  }
</script>
