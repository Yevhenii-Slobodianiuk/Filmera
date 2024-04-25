import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TBDB_KEY;
const page = 1;

export const tmdbApi = createApi({
	reducerPath: "tmdbApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
	endpoints: (builder) => ({
		// Get Movies by [Type]
		getMovies: builder.query({
			query: () => {
				return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`
			}
		}),
		// Get Genres
		getGenres: builder.query({
			query: () => {
				return `/genre/movie/list?api_key=${tmdbApiKey}`
			}
		})
	}),
});

export const {
	useGetMoviesQuery,
	useGetGenresQuery,
} = tmdbApi;