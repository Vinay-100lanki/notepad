import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({showAlert}) => {
  const [credential, setCredential] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const { name, username, email, password } = credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
      }),
    });
    // console.log("Signup form submitted");
    const data = await response.json();
    // console.log("Signup form submitted");
    if (data.success) {
      localStorage.setItem("token", data.authToken);
      window.location.href = "/shownotes";
      alert("Signup successful! Redirecting to notes page.");
    } else {
      alert("Invalid credentials, please try again.");
    
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginTop: "80px" }} className="container card shadow-lg border-0">
      <div className="card-footer text-muted text-center">
        <h4 className="mb-3">Sign Up</h4>
        <form onSubmit={handleOnSubmit}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={onChange}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={onChange}
          />
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={onChange}
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={onChange}
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            required
            onChange={onChange}
          />
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <div className="mt-3">
            <span>Already Register </span>
            <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
