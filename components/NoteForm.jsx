import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    

  if (!title.trim()) {
    alert("⚠️ Please enter a title");
    return;
  }

  if (!content.trim()) {
    alert("⚠️ Please enter note content");
    return;
  }

    if (!title || !content) return;

    addNote({
      title,
      content,
      category,
    });

    alert("✅ Note added successfully!");
    setTitle("");
    setContent("");
    setCategory("Work");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
        <option>Other</option>
      </select>

      <button type="submit">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;