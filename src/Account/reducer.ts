import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state with `currentUser` as `any` for simplicity
const initialState = {
	currentUser: null as any,
};

const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<any>) => {
			state.currentUser = action.payload;
		},
		logout: (state) => {
			state.currentUser = null; // Reset currentUser to null on logout
		},
	},
});

// Selector to get the current user from the state
export const selectCurrentUser = (state: { accountsReducer: typeof initialState }) => state.accountsReducer.currentUser;

// Export actions and reducer
export const { setCurrentUser, logout } = accountSlice.actions; // Export logout action
export default accountSlice.reducer;
