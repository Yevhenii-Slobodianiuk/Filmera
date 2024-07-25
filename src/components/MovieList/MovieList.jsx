import Movie from "../Movie/Movie";
import { useStyles } from "./styles";

const MovieList = ({ movies, numberOfMovies }) => {
	const styles = useStyles();

	return (
		<styles.MoviesContainer container gap={2}>
			{movies.results.slice(1, numberOfMovies).map((movie, i) => {
				return (
					<Movie key={movie.id} movie={movie} i={i} id={movie.id} />
				)
			})}
		</styles.MoviesContainer>
	)
}

export default MovieList;