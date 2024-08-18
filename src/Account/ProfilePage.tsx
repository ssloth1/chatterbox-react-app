import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout, profile } from "./client";
import { logout, selectCurrentUser, setCurrentUser } from "./reducer";
import Sidebar from "../Sidebar";
import "./AccountStyles/ProfilePage.css";

import { getZodiacSign } from "../Utils/zodiacUtils";
import { fetchHoroscope } from "../API/horoscopeAPI";

export default function ProfilePage() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [horoscope, setHoroscope] = useState("");

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const user = await profile();
				dispatch(setCurrentUser(user));

				// Determine zodiac sign and fetch horoscope
				if (user.dob) {
					const date = new Date(user.dob);
					const zodiacSign = getZodiacSign(date.getDate(), date.getMonth() + 1);
					const horoscope = await fetchHoroscope(zodiacSign);  // Fetch from backend
					setHoroscope(horoscope);
				}
			} catch (err) {
				setError("Failed to fetch user details.");
				navigate("/");
			} finally {
				setLoading(false);
			}
		};

		fetchProfile();
	}, [dispatch, navigate]);

	const handleSignOut = async () => {
		await signout();
		dispatch(logout());
		navigate("/");
	};

	if (loading) {
		return <p className="text-center">Loading...</p>;
	}

	if (error) {
		return <p className="text-center text-danger">{error}</p>;
	}

	return (
		<div className="profile-container">
			<Sidebar />
			<div className="profile-card-container">
				<div className="profile-card">
					<div className="profile-header">
						<h2>Profile</h2>
					</div>
					<div className="profile-body">
						<p><strong>Username:</strong> {currentUser.username}</p>
						<p><strong>Email:</strong> {currentUser.email}</p>
						{currentUser.firstName && <p><strong>First Name:</strong> {currentUser.firstName}</p>}
						{currentUser.lastName && <p><strong>Last Name:</strong> {currentUser.lastName}</p>}
						{currentUser.phone && <p><strong>Phone:</strong> {currentUser.phone}</p>}
						{currentUser.dob && <p><strong>Date of Birth:</strong> {new Date(currentUser.dob).toLocaleDateString()}</p>}
						<p><strong>Role:</strong> {currentUser.role}</p>
						<p><strong>Today's Horoscope:</strong> {horoscope}</p>
						<button className="btn-signout" onClick={handleSignOut}>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}