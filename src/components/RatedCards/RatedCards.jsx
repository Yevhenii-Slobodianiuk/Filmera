import { Typography, Box } from "@mui/material"

import Movie from "../Movie/Movie"
import { useStyles } from "./styles"

const RatedCards = ({ title, data }) => {
	const styles = useStyles();
	
	return (
		<Box>
			<Typography variant="h5" gutterBottom>{title}</Typography>
			<styles.Container display="flex" flexWrap="wrap" gap={4}>
				{data?.results?.map((movie, i) => (
					<Movie key={movie.id} i={i} movie={movie} id={movie.id} />
				))}
			</styles.Container>
		</Box>
	)
}

export default RatedCards