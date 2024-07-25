import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useStyles } from './style';

const Poster = ({ movie }) => {
	const styles = useStyles();

	if (!movie) return null;

	return (
		<styles.Container component={Link} to={`/movie/${movie.id}`}>
			<styles.CustomCard sx={{ position: "relative" }}>
				<styles.CustomCardMedia
					media="picture"
					alt={movie.title}
					image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					title={movie.title}
				/>
				<Box padding="20px">
					<styles.CustomCardContent sx={{ position: "relative", backgroundColor: "transparent"}}>
						<Typography variant="h5" gutterBottom>{movie.title}</Typography>
						<Typography variant="body2" gutterBottom>	{movie.overview}</Typography>
					</styles.CustomCardContent>
				</Box>
			</styles.CustomCard>
		</styles.Container>
	)
}

export default Poster