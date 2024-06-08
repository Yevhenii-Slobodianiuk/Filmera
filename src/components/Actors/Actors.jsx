import { useParams } from "react-router-dom";
import { Grid, Typography, Box, CircularProgress, Button } from "@mui/material";
import { ArrowBack, Movie } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useGetActorQuery } from "../../services/TMDB";
import { useStyles } from "./styles";

const Actors = () => {
	const { id } = useParams();
	const { data, isFetching, isError } = useGetActorQuery(id)
	const styles = useStyles()
	console.log(data)

	const handleMauseMove = (e) => {
		const element = e.target;

		const xVal = e.clientX
		const yVal = e.clientY

		const width = element.offsetWidth;
		const height = element.offsetHeight;

		const yRotation = 5 * ((xVal - width / 2) / width)
		const xRotation = -5 * ((yVal - height / 2) / height)

		const transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

		element.style.transform = transform;
	}

	const handleMouseOut = (e) => {
		const element = e.target;
		element.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)"
	}

	const handleMouseDown = (e) => {
		const element = e.target;
		element.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
	}

	const handleMouseUp = (e) => {
		const element = e.target;
		element.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
	}

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<CircularProgress size="8rem" />
			</Box>
		)
	}
	if (isError) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<Link to="/">Something went wrong - Go back</Link>
			</Box>
		)
	}

	return (
		<styles.ContainerSpaceAround container>
			<Grid item sm={12} lg={4}>
				<styles.Poster
					onMouseMove={(e) => handleMauseMove(e)}
					onMouseOut={(e) => handleMouseOut(e)}
					onMouseDown={(e) => handleMouseDown(e)}
					onMouseUp={(e) => handleMouseUp(e)}
					src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} alt={data?.name}
				/>
			</Grid>
			<Grid item container direction="column" lg={7}>
				<Typography variant="h3" gutterBottom>
					{data?.name}
				</Typography>
				<Typography variant="h5" gutterBottom sx={{ mt: "10px" }}>
					Born: {data?.birthday}
				</Typography>
				<Typography sx={{ mb: "2rem" }}>
					{data?.biography}
				</Typography>
				<styles.ButtonsGroup>
					<styles.ButtonsContainer>
						<Button
							size="medium" variant="contained"
							target="_blank"
							rel="noopener norefer"
							href={`https://www.imdb.com/name/${data?.imdb_id}`}
							endIcon={<Movie />}
						>
							IMDB
						</Button>
						<Button
							size="medium" variant="text"
							endIcon={<ArrowBack />}
							sx={{ borderColor: "primary.main" }}
						>
							<Typography
								component={Link}
								to="/"
								color="inherit"
								variant="subtitle2"
								sx={{ textDecoration: "none" }}>
								Back
							</Typography>
						</Button>
					</styles.ButtonsContainer>
				</styles.ButtonsGroup>
			</Grid>
		</styles.ContainerSpaceAround>
	)
}

export default Actors;