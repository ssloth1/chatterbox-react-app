import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const fetchHoroscope = async (sign: string) => {
	const response = await axios.get(`${REMOTE_SERVER}/api/horoscope/${sign}`);
	return response.data.horoscope;
};