import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TBDB_KEY;

export const tmdbApi = createApi({
	reducerPath: "tmdbApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
	endpoints: (builder) => ({
		// Get Movies by [Type]
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page, searchQuery }) => {
				//* Get movies by Search
				if (searchQuery) {
					return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
				}
				//* Get movies by Category
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === "string") {
					return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
				}
				//* Get movies by Genres
				return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
			}
		}),
		//* Get movie with id
		getMovie: builder.query({
			query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
		}),
		//* Get Genres
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
	useGetMovieQuery,
} = tmdbApi;