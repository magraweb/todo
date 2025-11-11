const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '', trim: true },
  done: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
