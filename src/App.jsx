import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([
      {
        id: Date.now(),
        ...note,
      },
      ...notes,
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    const titleMatch = note.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      note.category === category;

    return titleMatch && categoryMatch;
  });

  return (
    <div className="container">
      <h1> 📒Personal Notes</h1>
      

      <h3>You have {notes.length} notes</h3>

      <NoteForm addNote={addNote} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;