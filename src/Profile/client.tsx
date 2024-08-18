// src/Account/client.ts
import axios from "axios";
export const REMOTE_SERVER = "http://localhost:4000" ;
const POSTS_API = `${REMOTE_SERVER}/api/posts`;
const axiosWithCredentials = axios.create({ withCredentials: true });


//console.log('bliby', REMOTE_SERVER);
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
	return response.data;
};
export const profile = async () => {
	const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    //console.log("got it", response.data);
	return response.data;
};
export const newprofile = async (userId: string) => {
	const response = await axiosWithCredentials.post(`${USERS_API}/profile`, { userId });
    //console.log("got it", response.data);
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

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_REMOTE_SERVER,
    withCredentials: false,
  });

export const allUsers = async (searchText: string = "") => {
    try {
      const response = await axiosInstance.get(`${USERS_API}`, {
        params: { q: searchText },
      });
      return response.data;
    } catch (error) {
      console.error(searchText);
      throw error;
    }
  };

export const fetchPosts= async () => {
    // Construct the URL with a query string for searchText if it's not empty
    const { data } = await axios.get(POSTS_API);
    return data;
};