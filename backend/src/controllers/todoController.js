const Todo = require('../models/Todo');
const mongoose = require('mongoose');

const isValidId = id => mongoose.Types.ObjectId.isValid(id);

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json({ data: todos });
  } catch (err) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Title is required' });
    }
    const todo = await Todo.create({ title: title.trim(), description: description || '' });
    res.status(201).json({ data: todo });
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid ID' });

    const { title, description } = req.body;
    if (title !== undefined && (!title || !String(title).trim())) {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }

    const todo = await Todo.findByIdAndUpdate(
      id,
      { ...(title !== undefined ? { title: title.trim() } : {}), ...(description !== undefined ? { description } : {}) },
      { new: true }
    );

    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ data: todo });
  } catch (err) {
    next(err);
  }
};

exports.toggleDone = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid ID' });

    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.done = !todo.done;
    await todo.save();
    res.json({ data: todo });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid ID' });

    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.json({ data: todo });
  } catch (err) {
    next(err);
  }
};
