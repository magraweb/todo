import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos = [], onToggle, onDelete, onUpdate }) {
  if (!todos.length) return <div className="muted">No todos yet</div>;
  return (
    <ul className="list">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
