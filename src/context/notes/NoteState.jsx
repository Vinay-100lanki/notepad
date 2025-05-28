import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const Notes = [];

  const [notes, setNotes] = useState(Notes);

  // Fetching all notes
  const getNotes = async () => {
    // API CAll
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") || "", // Use token from localStorage
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // adding a note
  const addNote = async (title, description, tag, author = "") => {
    // Trim to avoid sending empty spaces
    if (!title?.trim() || !description?.trim() || !tag?.trim()) {
      console.error("Title, description, and tag are required.");
      return;
    }

    // Prepare request body according to backend schema
    const bodyObj = {
      title: title.trim(),
      description: description.trim(),
      tag: tag.trim(),
    };
    // Only add author if your backend expects it
    if (author && author.trim()) {
      bodyObj.author = author.trim();
    }

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
 localStorage.getItem("token") || "", // Use token from localStorage
        },
        body: JSON.stringify(bodyObj),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add note:", errorData.error || response.statusText);
        return;
      }

      const json = await response.json();
      setNotes([...notes, json]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  // deleting a note

  // API CAll

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") || "", // Use token from localStorage
      },
    });

    // Optionally check response status here

    const json = await response.json();
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token") || "", // Use token from localStorage
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Optionally check response status here
    const json = await response.json();

    const newNote = JSON.parse(JSON.stringify(json));
    const newNotes = JSON.parse(JSON.stringify(notes)); // <-- Add this line

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        newNotes[index].author = newNote.author; // Update author if needed
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
