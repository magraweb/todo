import React, { useState } from 'react';

export default function TodoForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    if (!title.trim()) {
      setErr('Title is required');
      return;
    }
    setSaving(true);
    try {
      await onCreate({ title: title.trim(), description: description.trim() });
      setTitle(''); setDescription('');
    } catch (err) {
      setErr('Failed to add');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" disabled={saving} />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description (optional)" disabled={saving} />
      <button type="submit" disabled={saving}>Add</button>
      {err && <div className="error">{err}</div>}
    </form>
  );
}
