import React, { useState } from 'react';
import axios from 'axios';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Test() {
	const [axiosTest, setAxiosTest] = useState("");

	const fetchTestMessage = async () => {
		try {
			const response = await axios.get(`${REMOTE_SERVER}/test`);
			setAxiosTest(response.data);
		} catch (error) {
			console.error('Error fetching test message:', error);
			setAxiosTest('Failed to fetch test message');
		}
	};

	return (
		<div>
			<h1>Test</h1>
			<p>Remote server: {REMOTE_SERVER}</p>
			<p>Message: {axiosTest}</p>
			<button onClick={fetchTestMessage}>Fetch test message</button>
		</div>
	);
}
