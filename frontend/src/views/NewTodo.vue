<template>
  <div id="newtodo" class="container">
    <h3>Make a new todo</h3>
    <form @submit.prevent="newTodo" class="col s12">
      <input type="text" name="title" id="title" placeholder="Title" v-model="title">
      <div class="input-field col s12">
      <textarea id="todo" class="materialize-textarea" placeholder="Body" v-model="body"></textarea>
      </div>
      <p class="red-text">{{ this.invalid }}</p>
      <button type="submit" class="btn waves-effect">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    if (!localStorage.token) {
      this.$router.push("/404")
    }
  },
  name: 'newtodo',
  data: () => ({
    title: "",
    body: "",
    invalid: "",
  }),
  methods: {
    newTodo(e) {
      if (this.title && this.body) {
        if(localStorage.token) {
          const API_URL = 'http://localhost:5000/todos/newTodo'
          let sendData = {
            title: this.title,
            body: this.body
          };
          axios.post(API_URL, sendData, {
            headers: {
              'Authorization': 'Bearer ' + localStorage.token
            }
          }).then(() => {
            this.invalid = '';
            this.$router.push('/');
          }).catch(err => {
            this.invalid = 'Internal Server Error 500';
          });
        } else {
          this.$router.push('/login')
        }
      } else {
        this.invalid = 'Please fill out all the fields'
      }
    }
  }
}
</script>