// src/store.tsx

import { configureStore } from "@reduxjs/toolkit";
//import postsReducer from "./PostPage/reducer";
import accountsReducer from "./Account/reducer";

const store = configureStore({
	reducer: {
		//postsReducer,
		accountsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;