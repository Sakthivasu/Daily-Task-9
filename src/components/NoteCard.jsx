function NoteCard({
  note,
  deleteNote,
}) {
  const colors = {
    Work: "#6fb32c",
    Personal: "#ce932d",
    Study: "#d82d71",
    Other: "#6753b1",
  };

  return (
    <div className="card">
      <h3>{note.title}</h3>

      <p>{note.content}</p>

      <div className="card-footer">
        <span
          className="badge"
          style={{
            backgroundColor:
              colors[note.category],
          }}
        >
          {note.category}
        </span>

        <button
          className="delete-btn"
          onClick={() =>
            deleteNote(note.id)
          }
        >
         🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;