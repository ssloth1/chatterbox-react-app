import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser, selectCurrentUser } from "./reducer";
import { profile } from "./client";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		const checkAuth = async () => {
			if (!currentUser) {
				try {
					const user = await profile();
					dispatch(setCurrentUser(user));
				} catch (err) {
					navigate("/"); // Redirect to login if user is not authenticated
				}
			}
		};

		checkAuth();
	}, [currentUser, dispatch, navigate]);

	if (!currentUser) {
		return null;
	}

	return <>{children}</>; // Render the children if authenticated
}