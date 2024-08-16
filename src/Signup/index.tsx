import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="signup-container">
        <div className="logIn-section">
          <h2>Welcome Back</h2>
          <button className="btn-logIn">
            {" "}
            <Link
              to={`/`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              Log In
            </Link>
          </button>
        </div>
        <div className="signUp-section">
          <h1>Create Account</h1>
          <input type="text" placeholder="First Name" />
          <br />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="date" />

          <button className="btn-signUp">
            {" "}
            <Link
              to={`/`}
              className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
