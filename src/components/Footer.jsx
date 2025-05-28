import React from "react";

const Footer = () => {
  // Determine if the footer should be fixed based on the document height
  const [isFixed, setIsFixed] = React.useState(false);

  React.useEffect(() => {
    const checkFooterPosition = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      setIsFixed(bodyHeight <= windowHeight);
    };

    checkFooterPosition();
    window.addEventListener("resize", checkFooterPosition);
    return () => window.removeEventListener("resize", checkFooterPosition);
  }, []);

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        background: "#282c34",
        color: "#fff",
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 100,
        boxShadow: "6 -2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        position: " not-absolute",
        justifyContent: "center",
      }}
    >
      <p>© 2023 Notepad. All rights reserved.</p>
      <div>
        <a
          href="/login"
          style={{ color: "#61dafb", textDecoration: "none", marginRight: "1rem" }}
        >
          Login
        </a>
        <a
          href="/signup"
          style={{ color: "#61dafb", textDecoration: "none", marginRight: "1rem" }}
        >
          Sign Up
        </a>
        <a
          href="/"
          style={{ color: "#61dafb", textDecoration: "none", marginRight: "1rem" }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{ color: "#61dafb", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="/shownotes"
          style={{ color: "#61dafb", textDecoration: "none", marginRight: "1rem" }}
        >
          Notes
        </a>
        <a
          href="/contact"
          style={{ color: "#61dafb", textDecoration: "none" }}
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
