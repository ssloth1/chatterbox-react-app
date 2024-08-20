import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUser, updateUser } from "../client";

export default function EditUser() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [user, setUser] = useState<any>(undefined);
	const { userId } = useParams();
	const navigate = useNavigate();

	// Fetch user data on component mount
	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const fetchedUser = await fetchUser(userId);
				setUser(fetchedUser);
				setName(fetchedUser.name);
				setEmail(fetchedUser.email);
			}
		};
		fetchData();
	}, [userId]);

	// update user data
	const renewUser = async () => {
		if (user) {
			const updatedUser = { ...user, name, email };
			await updateUser(updatedUser);
			navigate("./../");
		}
	};

	return (
		<div className="col-12 col-md-9 border border-1">
			<div className="mt-4 mx-5">
				<div className="row heading">
					<h1 className="text-muted">Edit User</h1>
				</div>
				<div className="row form">
					<form>
						<div className="form-group mt-2">
							<label htmlFor="userName">User Name:</label>
							<input
								type="text"
								className="form-control mt-2"
								id="userName"
								placeholder="Enter Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-group mt-2">
							<label htmlFor="userEmail">User Email:</label>
							<input
								type="email"
								className="form-control mt-2 mb-2"
								id="userEmail"
								placeholder="Enter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</form>
				</div>
				<div className="row buttons mb-2">
					<div className="col col-1">
						<button
							type="button"
							className="btn btn-success"
							onClick={renewUser}
						>
							Save
						</button>
					</div>
					<div className="col col-1">
						<button
							type="button"
							className="btn btn-danger"
							onClick={() => navigate("./../")}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}