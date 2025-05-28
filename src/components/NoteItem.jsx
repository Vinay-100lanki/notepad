import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = ({ note , updateNote }) => {
  const context = useContext(noteContext);
  const { notes, deleteNote , editNote } = context;

  if (!note) {
    return null;
  }  

  return (
    <li
      className="list-group-item mb-3 shadow-lg rounded "
      style={{
        background: "#f8f9fa",
        border: "1px solid #e0e0e0",
        padding: "1.5rem",
      }}
      key={note._id}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0" style={{ color: "#343a40" }}>
          {note.title}
        </h5>
        <span className="badge bg-primary">{note.tag}</span>
      </div>
      <p className="mb-2" style={{ color: "#495057" }}>
        {note.description}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted small">on {note.author}<br /></span>
        <span className="text-muted small">
          {new Date(note.date).toLocaleString()}
        </span>
      </div>
      <div className="mt-3 d-flex gap-2 align-items-center">
        <button
          className="btn btn-sm btn-outline-primary"
          title="Edit"
          onClick={() => updateNote(note)}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          title="Delete"
          onClick={() => {deleteNote(note._id)  ,alert("Note deleted successfully!", "success")}}
        > 
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
  
};

export default NoteItem;
