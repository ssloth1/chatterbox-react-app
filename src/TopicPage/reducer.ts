import { createSlice } from "@reduxjs/toolkit";
import { topics } from "../Database";
const initialState = {
  topics: [],
  posts: [],
};
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, { payload: post }) => {
      const newPost: any = {
        _id: new Date().getTime().toString(),
        postID: post.postID,
        postTitle: post.postTitle,
        topicDesc: post.postDesc,
        comments: [],
        postDate: newDate(),
        likes: post.likes,
        creator: post.creator
      };
      state.posts = [...state.posts, newPost] as any;
    },
    //editPost;
    updatePost: (state, { payload: topic }) => {
      state.topics = state.topics.map((t: any) =>
        t._id === topic._id ? topic : t
      ) as any;
    },

    //likePost;- 
    setTopics: (state, action) => {
      state.topics = action.payload;
    },
    addTopic: (state, { payload: topic }) => {
      const newTopic: any = {
        _id: new Date().getTime().toString(),
        topicTitle: topic.topicTitle,
        topicDesc: topic.topicDesc,
      };
      state.topics = [...state.topics, newTopic] as any;
    },
    deleteTopic: (state, { payload: topicId }) => {
      state.topics = state.topics.filter(
        (t: any) => t._id !== topicId);
    },
    updateTopic: (state, { payload: topic }) => {
      state.topics = state.topics.map((t: any) =>
        t._id === topic._id ? topic : t
      ) as any;
    },
    editTopic: (state, { payload: topicId }) => {
      state.topics = state.topics.map((t: any) =>
        t._id === topicId ? { ...t, editing: true } : t
      ) as any;
    },
  },
});
export const { addTopic, deleteTopic, updateTopic, editTopic, setTopics, setPosts, addPost, updatePost  } =
topicsSlice.actions;
export default topicsSlice.reducer;

function newDate() {
  throw new Error("Function not implemented.");
}
