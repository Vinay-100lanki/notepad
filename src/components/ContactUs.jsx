import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-5">
      {/* Add margin-top for spacing below navbar */}
      <div style={{ marginTop: "100px" }}></div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0">
            <div className="card-body p-3">
              <h1 className="mb-4 text-primary fw-bold text-center">Contact Us</h1>
              <div className="text-center lead mb-4">
                📧 Contact us at:{" "}
                <a
                  href="mailto:your@email.com"
                  className="text-decoration-none text-primary"
                >
                  notepadinurhand@email.com
                </a>
                <br />
                🌐 Visit:{" "}
                <a
                  href="https://notepadinurhand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  notepadinurhand.com
                </a>
              </div>
              <hr />
              <div className="mb-4">
                <h5 className="fw-bold text-primary">Headquarter</h5>
                <p className="mb-1">
                  123 Main Street,<br />
                  Downtown, Cityville 12345<br />
                  Phone: <a href="tel:+1234567890" className="text-decoration-none text-primary">+1 234-567-890</a><br />
                  Email: <a href="mailto:headquarter@email.com" className="text-decoration-none text-primary">headquarter@email.com</a>
                </p>
              </div>
              <div>
                <h5 className="fw-bold text-primary">Corporate Office</h5>
                <p className="mb-1">
                  456 Corporate Ave,<br />
                  Business Park, Cityville 67890<br />
                  Telephone: <a href="tel:+1987654321" className="text-decoration-none text-primary">+1 987-654-321</a><br />
                  Email: <a href="mailto:corporate@email.com" className="text-decoration-none text-primary">corporate@email.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
