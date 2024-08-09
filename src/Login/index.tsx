import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<div className="vh-100 d-flex justify-content-center align-items-center">
			<div className="login-container">
				<div className="login-section">
					<h1>Login to Your Account</h1>
					<input type="email" placeholder="Email" />
					<br />
					<input type="password" placeholder="Password" />
					<Link to={`/Home`} className="btn-login">
						Log In
					</Link>
				</div>
				<div className="signup-section">
					<h2>New Here?</h2>
					<Link to={`/SignUp`} className="btn-signup">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
}