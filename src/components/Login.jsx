import React , { useState  } from 'react'
import { Link, useLocation } from "react-router-dom";

const Login = () => {

    const [credential, setCredential] = useState({email: "", password: ""});
    


    // let history = useHistory();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // Handle signup logic here
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email:credential.email,
                password:credential.password
            })
        })
        const data = await response.json();
        // console.log("Signup form submitted");

        if (data.success) {
            // Handle successful login, e.g., redirect or show a success message
            localStorage.setItem('token', data.authToken);
            window.location.href = "/shownotes"; 
            alert("Login successful! Redirecting to notes page.");
            // histrory.push('/')// Redirect to the notes page
        } else{
            alert("Invalid credentials, please try again.");
        }


    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });  

    }

return (
    <div style={{ marginTop: "80px" }} className="container card shadow-lg border-0">
            <div className="card-footer text-muted text-center">
                    <h4 className="mb-3">Login</h4>
                    <form onSubmit={handleOnSubmit}>
                            <input
                                    className="form-control mb-3"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={credential.email}
                                    onChange={onChange}
                                    required
                            />
                            <input
                                    className="form-control mb-3"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={credential.password}
                                    onChange={onChange}
                                    required
                            />
                            <button type="submit" className="btn btn-primary" >
                                    Login
                            </button>
                    </form>
                    <div className="mt-3">
                            <span>New user? </span>
                            <Link to="/signup">Sign up here</Link>
                    </div>
            </div>
    </div>
)
}

export default Login