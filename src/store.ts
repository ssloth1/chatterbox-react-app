import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./TopicPage/reducer";
// import postsReducer from "./PostPage/reducer";  

const store = configureStore({
  reducer: {
    postsReducer 
  },
});

export default store;