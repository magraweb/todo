import React, { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description || '');
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!title.trim()) return;
    setSaving(true);
    await onUpdate(todo._id, { title: title.trim(), description: description.trim() });
    setSaving(false);
    setEditing(false);
  };

  return (
    <li className={`item ${todo.done ? 'done' : ''}`}>
      <div className="left">
        <input type="checkbox" checked={!!todo.done} onChange={() => onToggle(todo._id)} />
      </div>

      <div className="main">
        {editing ? (
          <>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={description} onChange={e => setDescription(e.target.value)} />
          </>
        ) : (
          <>
            <div className="title">{todo.title}</div>
            {todo.description && <div className="desc">{todo.description}</div>}
            <div className="meta">Created: {new Date(todo.createdAt).toLocaleString()}</div>
          </>
        )}
      </div>

      <div className="actions">
        {editing ? (
          <>
            <button onClick={save} disabled={saving}>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}
