import { Grow, Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const Movie = ({ movie, id, i }) => {
	const styles = useStyles();

	return (
		<styles.Movie item xs={12} sm={6} md={4} lg={3} xl={2}>
			<Grow in timeout={(i + 1) * 200}>
				<Link to={`/movie/${id}`} style={styles.links}>
					<styles.Image src={movie.poster_path ?
						`https://image.tmdb.org/t/p/w500/${movie.poster_path}` :
						"https://www.fillmurray.com/200/300"} alt={movie.title}
					/>
					<styles.Title variant="h5">{movie.title}</styles.Title>
					<Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
						<div>
							<Rating readOnly value={movie.vote_average / 2} precision={0.1} />
						</div>
					</Tooltip>
				</Link>
			</Grow>

		</styles.Movie>
	)
}

export default Movie;