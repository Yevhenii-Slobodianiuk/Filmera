import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	isAuthenticated: false,
	sessionId: "",
}

export const authSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isAuthenticated = true;
			state.sessionId = localStorage.getItem("session_id");

			localStorage.setItem("accountId", action.payload.id);
		}
	}
})

const { actions, reducer } = authSlice;

export const {
	setUser
} = actions;

export default reducer;

export const userSelector = state => state.user;