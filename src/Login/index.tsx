import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="login-container">
        <div className="login-section">
          <h1>Login to Your Account</h1>
          <input type="email" placeholder="Email" />
          <br/>
          <input type="password" placeholder="Password" />
          <button className="btn-login">
            {" "}
            <Link
              to={`/Home`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              Log In
            </Link>
          </button>
        </div>
        <div className="signup-section">
          <h2>New Here?</h2>

          <button className="btn-signup">
            {" "}
            <Link
              to={`/SignUp`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              Sign Up{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
