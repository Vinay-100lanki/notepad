import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


return (
    <div
        className="container"
        style={{ paddingTop: "80px", paddingBottom: "70px" }}
    >
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card shadow-lg border-0 my-2">
                    <div className="card-body p-1 text-center">
                        <h1 className="mb-4 text-primary fw-bold">Welcome to Notepad</h1>
                        <p className="lead mb-4">
                            Your smart, simple, and secure way to take notes, stay
                            organized, and boost productivity.
                        </p>
                        <p>
                            Start capturing your thoughts, ideas, and to-dos with ease. Use
                            the navigation bar above to explore features like About and
                            Contact Us, or jump right in and start making notes!
                        </p>
                        <Link to="/about" className="btn btn-outline-primary mt-3 me-2">
                            Learn More
                        </Link>
                        <Link to="/contact" className="btn btn-primary mt-3">
                            Contact Us
                        </Link>
                        <Link to="/login" className="btn btn-primary mt-3  mx-2">
                            Start Making Notes
                        </Link>
                    </div>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    
);
};

export default Home;