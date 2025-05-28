import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    console.log("Current location:", location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        📝 Notepad
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${
                location.pathname === "/about" ? " active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${
                location.pathname === "/contact" ? " active" : ""
              }`}
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${
                location.pathname === "/addnote" ? " active" : ""
              }`}
              to="/addnote"
            >
              Add Note
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link${
                location.pathname === "/shownotes" ? " active" : ""
              }`}
              to="/shownotes"
            >
              Saved Notes
            </Link>
          </li>
          {!localStorage.getItem("token") ? (
            <form className="d-flex align-items-center">
              <li className="nav-item w-100 d-flex justify-content-center mt-3 mt-lg-0">
                <div className="d-flex gap-2">
                  <Link
                    className={`btn btn-secondary${
                      location.pathname === "/login" ? " active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`btn btn-primary${
                      location.pathname === "/signup" ? " active" : ""
                    }`}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </li>
            </form>
          ) : (
            // <Link
            //   className={`btn btn-secondary${
            //     location.pathname === "/login" ? " active" : ""
            //   }`}
            //   to="/login"
            // >
            //   Logout
            // </Link>
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
