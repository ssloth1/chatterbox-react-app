import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { signin } from "./client";

import "../Account/AccountStyles/LoginPage.css";

export default function LoginPage() {
	const [identifier, setIdentifier] = useState(""); // im calling this identifier because it can be either email or username
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async () => {
		try {
			const credentials = { identifier, password };
			const user = await signin(credentials);
			dispatch(setCurrentUser(user));
			navigate("/home");
		} catch (error) {
			setError("Login failed. Please check your credentials.");
		}
	};

	return (
		<div className="vh-100 d-flex justify-content-center align-items-center">
			<div className="login-container">
				<div className="login-section">
					<h1>Login to Your Account</h1>
					{error && <p className="error-message">{error}</p>}
					<input
						type="text"
						placeholder="Email or Username"
						value={identifier}
						onChange={(e) => setIdentifier(e.target.value)}
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<button className="btn-login" onClick={handleLogin}>
						Log In
					</button>
				</div>
				<div className="signup-section">
					<h2>Join the conversation!</h2>
					<Link to="/signup" className="btn-signup">Sign Up</Link>
				</div>
			</div>
		</div>
	);
}
