import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/TMDB";
import { genreOrCategory } from "../features/currentGenreOrCategory";

const store = configureStore({
	reducer: {
		[genreOrCategory.reducerPath]: genreOrCategory.reducer,
		[tmdbApi.reducerPath]: tmdbApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
})


export default store;
