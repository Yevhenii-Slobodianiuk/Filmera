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
			state.searchQuery = ""
		},
		searchMovie: (state, action) => {
			state.searchQuery = action.payload;
		}
	}
});

const { actions, reducer } = genreOrCategory;

export const {
	selectGenreOrCategory,
	searchMovie,
} = actions;

export default reducer;
