<template>
  <div class="home container">
    <h3>Todo List</h3>
    <div id="todo">
      <ul class="collection" v-if='this.todos.length > 0'>
        <li v-for="todo in this.todos" @click="delTodo" id="list-item" class="collection-item">
          <h4>{{ todo.title }}</h4>
          <p>{{ todo.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data: () => ({
    todos: []
  }),
  mounted() {
    if (!localStorage.token) {
      this.$router.push('/login');
    } else {
      const API_URL = 'http://localhost:5000/todos/getTodos'
      axios.get(API_URL, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        }
      }).then(resp => {
        resp.data.map(obj => {
          this.todos.push(obj)
        })
      }).catch(err => {
        console.log(err);
      });
    }
  },
  methods: {
    delTodo(e) {
      const title = e.target.childNodes[0].textContent;
      const find = this.todos.find((el) => {
        return el.title === title;
      });
      const id = find._id;
      const API_URL = 'http://localhost:5000/todos/delTodo/' + id;
      axios.delete(API_URL, {
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        }
      }).then(resp => {
        console.log(resp.data);
        location.reload();
      });
    }
  },
};
</script>
<style>
#list-item:hover {
  text-decoration: line-through;
}
</style>

