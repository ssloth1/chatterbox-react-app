import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "./client";
import { setCurrentUser } from "./reducer";

export default function SignupPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [dob, setDob] = useState("");
	const [role, setRole] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignup = async () => {
		try {
			const user = {
				username,
				email,
				password,
				firstName,
				lastName,
				phone,
				dob,
				role,
			};
			const newUser = await signup(user);
			dispatch(setCurrentUser(newUser));  // Set the user as authenticated
			navigate("/Home");  // Redirect to home after signup
		} catch (err) {
			setError("Failed to create an account. Please try again.");
		}
	};

	// Update role based on the selected questionnaire option
	const handleQuestionnaireChange = (value: string) => {
		if (value === "admin") {
			setRole("ADMIN");
		} else if (value === "staff") {
			setRole("STAFF");
		} else {
			setRole("USER");
		}
	};

	return (
		<div className="vh-100 d-flex justify-content-center align-items-center">
			<div className="signup-container">
				<h1>Create an Account</h1>
				{error && <p className="error-message">{error}</p>}
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<br />
				<input
					type="date"
					placeholder="Date of Birth"
					value={dob}
					onChange={(e) => setDob(e.target.value)}
				/>
				<br />
				<div className="questionnaire">
					<h4>How do you plan to use the platform?</h4>
					<div>
						<input
							type="radio"
							id="admin"
							name="usage"
							value="admin"
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="admin">I want to create topics (Admin)</label>
					</div>
					<div>
						<input
							type="radio"
							id="staff"
							name="usage"
							value="staff"
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="staff">I work here and will manage the platform (Staff)</label>
					</div>
					<div>
						<input
							type="radio"
							id="user"
							name="usage"
							value="user"
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="user">I just want to join discussions (User)</label>
					</div>
				</div>
				<button className="btn-signup" onClick={handleSignup}>
					Sign Up
				</button>
			</div>
		</div>
	);
}
