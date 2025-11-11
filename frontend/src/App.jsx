import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, toggleDone, deleteTodo } from './api/todos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchTodos();
      setTodos(res.data);
    } catch (err) {
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload) => {
    // optimistic: add temp ID
    const temp = { _id: `temp-${Date.now()}`, title: payload.title, description: payload.description || '', done: false, createdAt: new Date() };
    setTodos(prev => [temp, ...prev]);
    try {
      const res = await createTodo(payload);
      // replace temp with server item
      setTodos(prev => prev.map(t => (t._id === temp._id ? res.data : t)));
    } catch (err) {
      setTodos(prev => prev.filter(t => t._id !== temp._id));
      setError('Failed to create todo');
    }
  };

  const handleToggle = async (id) => {
    // optimistic toggle
    setTodos(prev => prev.map(t => t._id === id ? { ...t, done: !t.done } : t));
    try {
      await toggleDone(id);
    } catch (err) {
      // revert
      setTodos(prev => prev.map(t => t._id === id ? { ...t, done: !t.done } : t));
      setError('Failed to toggle todo');
    }
  };

  const handleDelete = async (id) => {
    const backup = todos;
    setTodos(prev => prev.filter(t => t._id !== id));
    try {
      await deleteTodo(id);
    } catch (err) {
      setTodos(backup);
      setError('Failed to delete todo');
    }
  };

  const handleUpdate = async (id, payload) => {
    try {
      const res = await updateTodo(id, payload);
      setTodos(prev => prev.map(t => (t._id === id ? res.data : t)));
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  return (
    <div className="container">
      <h1>TODOs</h1>
      <TodoForm onCreate={handleCreate} />
      {loading && <div className="muted">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}
