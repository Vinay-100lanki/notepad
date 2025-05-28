// import React ,{useContext , useEffect} from "react";
// import  noteContext from "../context/notes/noteContext";

const About = () => {
  // const context = useContext(noteContext);

  // useEffect(() => {
  //     context.update();
  // }, []);

  return (
    <div className="container my-30" style={{ paddingTop: "80px", paddingBottom: "70px" }}>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-20">
              <h1 className="mb-4 text-primary fw-bold text-center">
                Welcome to Notepad
              </h1>
              <p className="lead text-center mb-4">
                <strong>Notepad</strong> – a smart, simple, and secure way to
                take notes, stay organized, and boost productivity.
              </p>
              <p>
                At Notepad, we believe that great ideas often start with a quick
                note. Whether you're a student, a busy professional, a creative
                thinker, or someone who just loves jotting things down — our app
                is designed to make capturing thoughts as easy and efficient as
                possible.
              </p>
              <h3 className="mt-4 text-success">🌟 Our Mission</h3>
              <p>
                To empower users with a seamless digital notebook that helps
                them organize their lives, unlock creativity, and never lose a
                single idea.
              </p>
              <h3 className="mt-4 text-info">💡 What We Offer</h3>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  A clutter-free interface to focus on writing
                </li>
                <li className="list-group-item">
                  Custom folders and tags for structured note management
                </li>
                <li className="list-group-item">
                  Smart search and filtering for quick access
                </li>
                <li className="list-group-item">
                  Secure syncing across devices (optional)
                </li>
                <li className="list-group-item">
                  Biometric and PIN protection for privacy
                </li>
                <li className="list-group-item">
                  Reminders, pinning, and customization features
                </li>
              </ul>
              <h3 className="mt-4 text-warning">👨‍💻 Who We Are</h3>
              <p>
                We are a passionate team of developers, designers, and creators
                who care about productivity and simplicity. Our goal is to make
                your everyday note-taking experience effortless and enjoyable —
                whether you're planning your day or drafting your next big idea.
              </p>
              <h3 className="mt-4 text-danger">🤝 Let’s Connect</h3>
              <p>
                We’re always looking to improve. If you have feedback,
                suggestions, or ideas — we’d love to hear from you!
                <br />
                📧 Contact us at:{" "}
                <a
                  href="mailto:your@email.com"
                  className="text-decoration-none text-primary"
                >
                  your@email.com
                </a>
                <br />
                🌐 Visit:{" "}
                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  yourwebsite.com
                </a>
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
