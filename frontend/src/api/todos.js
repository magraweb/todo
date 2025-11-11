import axios from 'axios';
const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: base,
  timeout: 5000
});

export const fetchTodos = () => api.get('/api/todos').then(r => r.data);
export const createTodo = payload => api.post('/api/todos', payload).then(r => r.data);
export const updateTodo = (id, payload) => api.put(`/api/todos/${id}`, payload).then(r => r.data);
export const toggleDone = id => api.patch(`/api/todos/${id}/done`).then(r => r.data);
export const deleteTodo = id => api.delete(`/api/todos/${id}`).then(r => r.data);
