import { useState } from "react";
import { Box, CircularProgress, useMediaQuery, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";
import Poster from "../Poster/Poster";

const Movies = () => {
	const [page, setPage] = useState(1)
	const { genreIdOrCategoryName, searchQuery } = useSelector(state => state.genreOrCategory);
	const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

	const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const numberOfMovies = lg ? 14 : 16;

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center">
				<CircularProgress size="4rem" />
			</Box>
		)
	}

	if (!data.results.length) {
		return (
			<Box display="flex" alignItems="center" mt="20px">
				<Typography variant="h4">
					No movies that match name.
					<br />
					Please search for something else.
				</Typography>
			</Box>
		)
	}

	if (error) {
		return (
			<Typography variant="h4">
				An error has occured.
			</Typography>
		)
	}

	return (
		<div>
			<Poster movie={data?.results[0]} />
			<MovieList movies={data} numberOfMovies={numberOfMovies} />
			<Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
		</div>
	)
}

export default Movies;