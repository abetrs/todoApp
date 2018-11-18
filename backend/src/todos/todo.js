const express = require('express');
const router = express.Router();
const Todo = require('./todo-model');
const auth = require('./auth');

router.get('/getTodos', auth, (req, res, next) => {
  const resp = [];
  Todo.find()
    .select('_id title body author')
    .exec()
    .then(docs => {
      for(todo of docs) {
        if (req.user.username === todo.author) {
          resp.push(todo);
        }
      }
      res.send(resp);
    }).catch(err => {
      res.send({ error: err });
    });
});
router.get('/getTodos/:todoId', auth, (req, res, next) => {
  Todo.findById({
      _id: req.params.todoId
    })
    .select('title body author')
    .exec()
    .then(docs => {
      res.send(docs);
    }).catch(err => {
      error: 'Not found'
    });
});

router.post('/newTodo', auth, (req, res, next) => {
  const newTodo = new Todo({
    title: req.body.title,
    body: req.body.body,
    author: req.user.username
  });
  newTodo.save()
    .then(savedTodo => {
      res.send({
        message: "Success",
        savedTodo: {
          _id: savedTodo._id,
          title: savedTodo.title,
          body: savedTodo.body,
          author: savedTodo.author
        }
      });
    }).catch(err => {
      res.send({ message: err.stack });
    });
});

router.delete('/delTodo/:todoId', auth, (req, res, next) => {
  Todo.findByIdAndDelete({
      _id: req.params.todoId
    })
    .exec()
    .then(delTodo => {
      res.send({
        message: "Successfully Deleted todo",
        todo: delTodo
      });
    }).catch(err => {
      res.send({
        error: err
      });
    });
});

module.exports = router;