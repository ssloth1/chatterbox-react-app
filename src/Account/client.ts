// src/Account/client.ts
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
console.log(REMOTE_SERVER);
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
	return response.data;
};
export const profile = async () => {
	const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
	return response.data;
};
export const signup = async (user: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
	return response.data;
};
export const signout = async () => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
	console.log(response.data);
	return response.data;
};
export const anonymousLogin = async () => {
	const response = await axiosWithCredentials.post(`${USERS_API}/anonymous`);
	return response.data;
};
