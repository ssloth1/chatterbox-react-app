import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	posts: [],
};
const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.posts = action.payload;
		},
		addPost: (state, { payload: post }) => {
			const newPost: any = {
				_id: new Date().getTime().toString(),
				postTitle: post.postTitle,
				postDesc: post.postDesc,
				topic: post.topic,
			};
			state.posts = [...state.posts, newPost] as any;
		},
		deletePost: (state, { payload: postId }) => {
			state.posts = state.posts.filter(
				(p: any) => p._id !== postId);
		},
		updatePost: (state, { payload: post }) => {
			state.posts = state.posts.map((p: any) =>
				p._id === post._id ? post : p
			) as any;
		},
		editPost: (state, { payload: postId }) => {
			state.posts = state.posts.map((p: any) =>
				p._id === postId ? { ...p, editing: true } : p
			) as any;
		},
	},
});
export const { addPost, deletePost, updatePost, editPost, setPosts } =
	postsSlice.actions;
export default postsSlice.reducer;