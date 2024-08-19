import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { signin, anonymousLogin } from "./client";  // Import anonymous login function


export default function LoginPage() {
	const [identifier, setIdentifier] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async () => {
		try {
			const credentials = { identifier, password };
			const user = await signin(credentials);
			dispatch(setCurrentUser(user));
			navigate("/Home");
		} catch (error) {
			setError("Login failed. Please check your credentials.");
		}
	};

	const handleAnonymousLogin = async () => {
		try {
			const user = await anonymousLogin();
			dispatch(setCurrentUser(user));
			navigate("/Home");
		} catch (error) {
			setError("Anonymous login failed. Please try again.");
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
					<button className="btn-anonymous" onClick={handleAnonymousLogin}>
						Access Anonymously
					</button>
				</div>
				<div className="signup-section">
					<h2>Join the conversation!</h2>
					<Link to="/SignUp" className="btn-signup">Sign Up</Link>
				</div>
			</div>
		</div>
	);
}
