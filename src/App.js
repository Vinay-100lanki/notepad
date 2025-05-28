import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddNote from "./components/AddNote";
// import { Link, useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import ShowNotes from "./components/ShowNotes";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/addnote" element={<AddNote />} />
              <Route path="/shownotes" element={<ShowNotes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
