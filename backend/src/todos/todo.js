const express = require('express');
const router = express.Router();

router.get('/getTodos', (req, res, next) => {
    res.send({
        message: "These are all the todos"
    })
});
router.get('/getTodos/:todoId', (req, res, next) => {
    res.send({
        message: "This is a specific todo with the id: " + req.params.todoId
    });
});

router.post('/newTodo', (req, res, next) => {
    res.send({
        "This is the data you sent": req.body
    });
});

router.delete('/delTodo', (req, res, next) => {
    res.send({
        "Deleted post": req.body
    });
});

module.exports = router;