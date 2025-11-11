const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todoController');

// GET all
router.get('/', ctrl.getAllTodos);

// POST create
router.post('/', ctrl.createTodo);

// PUT update title/description
router.put('/:id', ctrl.updateTodo);

// PATCH toggle done
router.patch('/:id/done', ctrl.toggleDone);

// DELETE
router.delete('/:id', ctrl.deleteTodo);

module.exports = router;
