const express = require('express');
const router = express.Router();
const Todo = require('./todo-model');

router.get('/getTodos', (req, res, next) => {
    Todo.find()
    .select('_id title body')
    .exec()
    .then(docs => {
        res.send(docs);
    }).catch(err => {
        error: err
    });
});
router.get('/getTodos/:todoId', (req, res, next) => {
    Todo.findById({_id: req.params.todoId })
    .select('title body')
    .exec()
    .then(docs => {
        res.send(docs);
    }).catch(err => {
        error: 'Not found'
    });
});

router.post('/newTodo', (req, res, next) => {
    const newTodo = new Todo({
        title: req.body.title,
        body: req.body.body,
    });
    newTodo.save()
    .then(_ => {
        res.send({
            message: "Success"
        });
    }).catch(err => {
        message: new Error('You are missing something in the body');
    });
});

router.delete('/delTodo', (req, res, next) => {
    res.send({
        "Deleted post": req.body
    });
});

module.exports = router;