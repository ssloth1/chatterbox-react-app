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
	const [role, setRole] = useState("USER"); // Default role is "USER"
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
			dispatch(setCurrentUser(newUser)); // Set the user as authenticated
			navigate("/Home"); // Redirect to home after signup
		} catch (err) {
			setError("Failed to create an account. Please try again.");
		}
	};

	// Update role based on the selected questionnaire option
	const handleQuestionnaireChange = (value: any) => {
		setRole(value);
	};

	return (
		<div className="vh-100 d-flex justify-content-center align-items-center bg-danger bg-gradient">
			<div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
				<h1 className="text-center mb-4">Create an Account</h1>
				{error && <p className="text-danger">{error}</p>}
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="date"
						className="form-control"
						placeholder="Date of Birth"
						value={dob}
						onChange={(e) => setDob(e.target.value)}
					/>
				</div>
				<div className="questionnaire mb-4">
					<h4>How do you plan to use the platform?</h4>
					<div className="form-check">
						<input
							type="radio"
							id="staff"
							name="usage"
							value="STAFF"
							className="form-check-input me-2"
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="staff" className="form-check-label">
							I work here and will manage the platform (Staff)
						</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							id="moderator"
							name="usage"
							value="MODERATOR"
							className="form-check-input me-2"
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="moderator" className="form-check-label">
							I will moderate the discussions (Moderator)
						</label>
					</div>
					<div className="form-check">
						<input
							type="radio"
							id="user"
							name="usage"
							value="USER"
							className="form-check-input me-2"
							defaultChecked
							onChange={(e) => handleQuestionnaireChange(e.target.value)}
						/>
						<label htmlFor="user" className="form-check-label">
							I want to join discussions (User)
						</label>
					</div>
				</div>
				<button className="btn btn-secondary w-100" onClick={handleSignup}>
					Sign Up
				</button>
			</div>
		</div>
	);
}
