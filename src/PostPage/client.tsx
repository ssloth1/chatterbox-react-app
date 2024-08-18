import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const TOPICS_API = `${REMOTE_SERVER}/api/topics`;
const POSTS_API = `${REMOTE_SERVER}/api/posts`;

export const findPostsForTopic = async (topicId: string, searchString?: string) => {
	const url = searchString
		? `${TOPICS_API}/${topicId}/posts?search=${encodeURIComponent(searchString)}`
		: `${TOPICS_API}/${topicId}/posts`;

	const response = await axios.get(url);
	return response.data;
};

export const createPost = async (topicId: string, post: any) => {
	const response = await axios.post(`${TOPICS_API}/${topicId}/post`, post);
	return response.data;
};

export const deletePost = async (postId: string) => {
	const response = await axios.delete(`${POSTS_API}/${postId}`);
	return response.data;
};

export const updatePost = async (post: any) => {
	const response = await axios.put(`${POSTS_API}/${post._id}`, post);
	return response.data;
};

export const fetchPost = async (id: string) => {
	const response = await axios.get(`${POSTS_API}/${id}`);
	return response.data;
};
