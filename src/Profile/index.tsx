import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout, profile, allUsers, newprofile } from "./client";
import {  setCurrentUser, selectCurrentUser, logout } from "./reducer";
import Sidebar from "./sidebar";
import { RootState } from '../store';
import SearchBar from "./searchbar";
import Community from "./community";


export default function ProfilePage() {
	const { userId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//const currentUser = useSelector((state: RootState) => state.profile.currentUser);
	const [currentUser, setCurrentUser] = useState({
		_id: "",
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		dob: "",
		role: "",
		__v: 0,
	});
	const [searchedUser, setSearchedUser] = useState({
		_id: "",
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		dob: "",
		role: "",
		__v: 0,
	});
	type User = {
		_id: string,
		username: string,
		firstName: string,
		lastName: string
		email: string,
		phone: string,
		dob: Date,
		role: string,
		__v: number,
	};
	//const [searchText, setSearchText] = useState<string>("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const fetchUsers = async (searchText: string) => {
		//console.log("is this even happening?");
		const searcheduser = await allUsers(searchText);
		//console.log("this is it", searchText);
		//console.log("searched user", (searcheduser.filter((user: User) => user.username === searchText)));
		const searchedUser = searcheduser.filter((user: User) => user.username === searchText);
		//console.log("search id", searchedUser[0]._id);
		navigate(`/profile/${searchedUser[0]._id}`);
		// navigate to Profile/{profileID} for searched user
	  };

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				console.log(userId);
				if (userId) {
					// Fetch specific user's profile if userId is provided
					const user = await newprofile(userId); // Update `profile` function to accept userId if necessary
					//console.log("new login", user);
					setCurrentUser(user);
					//console.log("this is ", currentUser);
				  } else {
					// Fetch current user's profile if no userId is provided
					const user = await profile();
					setCurrentUser(user);
					//console.log("this is ", user);
				  }
			  } catch (err) {
				setError("Username not found"); //make this a popup
				navigate("/");
			  } finally {
				setLoading(false);
			  }
			};
		
			fetchProfile();
		  }, [dispatch, navigate]);

		

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <SearchBar fetchUsers={fetchUsers} />
        <Sidebar />
        <div className="main-content">
            <div className="profile-community-container">
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
				<button className="btn-signout" onClick={handleSignOut}>
				  Sign Out
				</button>
			  </div>
			  </div>
                </div>
                <div className="community-container">
                    <Community />
                </div>
            </div>
        </div>
    </div>
	  );
	}


