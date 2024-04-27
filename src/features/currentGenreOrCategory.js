import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
	name: "genreOrCategory",
	initialState: {
		genreIdOrCategoryName: "popular",
		page: 1,
		searchQuery: "",
	},
	reducers: {
		selectGenreOrCategory: (state, action) => {
			state.genreIdOrCategoryName = action.payload;
		}
	}
});

const { actions, reducer } = genreOrCategory;

export const {
	selectGenreOrCategory,
} = actions;

export default reducer;
