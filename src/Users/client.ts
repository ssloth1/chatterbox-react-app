// chatterbox-react-app/src/Users/client.ts
import axios from 'axios';

const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const findAllUsers = async () => {
	const response = await axiosWithCredentials.get(USERS_API);
	//console.log("Users client: findAllUsers: response.data: ", response.data);
	return response.data;
};

export const findUsersByRole = async (role: string) => {
	const response = await axiosWithCredentials.get(`${USERS_API}?role=${role}`);
	//console.log("Users client: findUsersByRole: response.data: ", response.data);
	return response.data;
};

export const findUsersByPartialName = async (name: string) => {
	const response = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
	//console.log("Users client: findUsersByPartialName: response.data: ", response.data);
	return response.data;
};

export const findUserById = async (id: string) => {
	const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
	//console.log("Users client: findUserById: response.data: ", response.data);
	return response.data;
};

export const deleteUser = async (userId: string) => {
	const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
	//console.log("Users client: deleteUser: response.data: ", response.data);
	return response.data;
};

export const updateUser = async (user: any) => {
	const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
	//console.log("Users client: updateUser: response.data: ", response.data);
	return response.data;
};

export const createUser = async (user: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}`, user);
	//console.log("Users client: createUser: response.data: ", response.data);
	return response.data;
};

export const findUserByUsername = async (username: string) => {
	const response = await axiosWithCredentials.get(`${USERS_API}/username/${username}`);
	//console.log("Users client: findUserByUsername: response.data: ", response.data);
	return response.data;
};

export const signin = async (credentials: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
	//console.log("Users client: signin: response.data: ", response.data);
	return response.data;
};

export const profile = async () => {
	const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
	//console.log("Users client: profile: response.data: ", response.data);
	return response.data;
};

export const signup = async (user: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
	//console.log("Users client: signup: response.data: ", response.data);
	return response.data;
};






