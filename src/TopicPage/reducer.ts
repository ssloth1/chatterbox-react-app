import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  topics: [],
};
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
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
export const { addTopic, deleteTopic, updateTopic, editTopic, setTopics  } =
topicsSlice.actions;
export default topicsSlice.reducer;