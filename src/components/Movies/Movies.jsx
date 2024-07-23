import { useState, useEffect } from "react";
import { Box, CircularProgress, useMediaQuery, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import { useGetMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
	const [page, setPage] = useState(1)
	const { genreIdOrCategoryName, searchQuery } = useSelector(state => state.genreOrCategory);
	const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

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
			<MovieList movies={data} />
			<Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
		</div>
	)
}

export default Movies;