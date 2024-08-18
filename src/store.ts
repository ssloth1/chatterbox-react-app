import { configureStore } from "@reduxjs/toolkit";

// import postsReducer from "./PostPage/reducer";  
import profileReducer from "./Profile/reducer";

const store = configureStore({
  reducer: {
//    postsReducer 
    profile : profileReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;