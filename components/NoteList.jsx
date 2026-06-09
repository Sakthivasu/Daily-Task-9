import NoteCard from "./NoteCard";

function NoteList({
  notes,
  deleteNote,
}) {
  if (notes.length === 0) {
    return (
      <p className="empty">
        No notes yet. Add your first note above.
      </p>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;