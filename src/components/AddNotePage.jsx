import React, { useContext, useState, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const AddNotePage = () => {

     const context = useContext(noteContext);
      const { notes, deleteNote, editNote, getNotes } = context;
    
      useEffect(() => {
        if(localStorage.getItem("token")) {
        getNotes();
        }else{
          window.location.href = "/login";
        }
      }, []);
    
     
    
      const [note, setNote] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "",
      });
    
      const ref = useRef(null);
      const refClose = useRef(null);
    
      
    
      
    

  return (
    <div style={{ marginTop: "1500px", marginBottom: "80px" }}
      className="container card shadow-lg border-0">
        
      <AddNote />

      
    </div>
  );
};

export default AddNotePage;
