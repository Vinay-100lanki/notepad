import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const context = useContext(noteContext);
  const { addNote } = context;

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    alert("Note added successfully!", "success");
  };

  const handleReset = () => {
    setNote({ title: "", description: "", tag: "" });
    alert("Form reset successfully!", "info");
  };

  return (
    <div className="container card shadow-lg border-0" style={{ marginTop: "100px" , marginBottom: "80px" }}>
      <div className="card-footer text-muted text-center">
        {/* Note Form */}
        <div className="mt-5">
          <h4 className="mb-3">Write a Note</h4>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={onChange}
            required
            minLength={3}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            required
            minLength={3}
          />
          <textarea
            className="form-control mb-3"
            rows={6}
            placeholder="Type your note here..."
            name="description"
            value={note.description}
            onChange={onChange}
            required
            minLength={5}
          />
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-success"
              onClick={handleSave}
              disabled={
                note.title.length < 3 ||
                note.description.length < 5 ||
                note.tag.length < 3
              }
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleReset}
              disabled={
                note.title.length < 3 &&
                note.description.length < 5 &&
                note.tag.length < 3
              }
            >
              Reset
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AddNote;
