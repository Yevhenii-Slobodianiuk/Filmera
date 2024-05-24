import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/TMDB";
import { genreOrCategory } from "../features/currentGenreOrCategory";
import { authSlice } from "../features/auth";

const store = configureStore({
	reducer: {
		[genreOrCategory.reducerPath]: genreOrCategory.reducer,
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		[authSlice.reducerPath]: authSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
})


export default store;
