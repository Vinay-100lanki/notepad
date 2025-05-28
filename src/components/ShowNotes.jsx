import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const ShowNotes = () => {
  const context = useContext(noteContext);
  const { notes, deleteNote, editNote, getNotes } = context;

  useEffect(() => {
    if(localStorage.getItem("token")) {
    getNotes();
    }else{
      window.location.href = "/login";
    }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      eid: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleUpdate = (e) => {
        e.preventDefault();
        editNote(note.eid, note.etitle, note.edescription, note.etag);
        // setNote({ title: "", description: "", tag: "" });
        refClose.current.click();
        alert("Note updated successfully!", "success");
      };

      const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };


  return (
    <div
      style={{ marginTop: "100px", marginBottom: "50px" }}
      className="container card shadow-lg border-0"
    >
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Title"
                name="etitle"
                value={note.etitle}
                onChange={onChange}
                required
                minLength={3}
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Tag"
                name="etag"
                value={note.etag}
                onChange={onChange}
                required
                minLength={3}
              />
              <textarea
                className="form-control mb-3"
                rows={6}
                placeholder="Type your note here..."
                name="edescription"
                value={note.edescription}
                onChange={onChange}
                required
                minLength={5}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
                disabled={
                  note.etitle.length < 3 ||
                  note.edescription.length < 5 ||
                  note.etag.length < 3
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
       
      <h1 className="mb-4 text-primary fw-bold text-center">Your Notes</h1>
      {notes && notes.length > 0 ? (
        <div className="row">
          {notes.map((note, idx) => (
            <div className="col-md-4 mb-4" key={note._id || idx}>
              <NoteItem
                note={note}
                key={note._id}
                updateNote={updateNote}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No notes available.</p>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default ShowNotes;
