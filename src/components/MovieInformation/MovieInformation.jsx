import { useEffect, useMemo, useState } from 'react';
import { Typography, Button, ButtonGroup, Grid, Box, CircularProgress, Tooltip, Rating } from '@mui/material';
import { Theaters, Language, PlusOne, FavoriteBorderOutlined, Remove, ArrowBack, Movie, Favorite } from "@mui/icons-material";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



import { useGetListQuery, useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { userSelector } from '../../features/auth';
import genreIcons from "../../assets/genres"
import MovieList from '../MovieList/MovieList';
import { useStyles } from './styles';

const MovieInformation = () => {
	const { user } = useSelector(userSelector);
	const [open, setOpen] = useState(false);
	const { id } = useParams();
	const styles = useStyles();
	const dispatch = useDispatch();
	const [isMovieFavorited, setIsMovieFavorited] = useState(false);
	const [isMovieWatchListed, setIsMovieWatchListed] = useState(false);

	const { data, isFetching, error } = useGetMovieQuery(id);
	const { data: favoriteMovies } = useGetListQuery({ listName: "favorite/movies", accountId: localStorage.getItem("accountId"), sessionId: localStorage.getItem("session_id"), page: 1 });
	const { data: watchlistMovies } = useGetListQuery({ listName: "watchlist/movies", accountId: localStorage.getItem("accountId"), sessionId: localStorage.getItem("session_id"), page: 1 })
	const { data: recommendations } = useGetRecommendationsQuery({ movieId: id, list: "recommendations" });

	useEffect(() => {
		setIsMovieFavorited(!!favoriteMovies?.results?.find(movie => movie?.id === data?.id));
	}, [favoriteMovies, data]);

	useEffect(() => {
		setIsMovieWatchListed(!!watchlistMovies?.results?.find(movie => movie?.id === data?.id));
	}, [watchlistMovies, data]);

	const favoriteOptions = {
		media_type: "movie",
		media_id: id,
		favorite: !isMovieFavorited
	}

	const watchlistOptions = {
		media_type: "movie",
		media_id: id,
		watchlist: !isMovieWatchListed
	}

	const addToFavorites = async () => {
		try {
			const response = await axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TBDB_KEY}&session_id=${localStorage.getItem("session_id")}`, favoriteOptions)
			console.log('Favorite response:', response)
			setIsMovieFavorited((prev) => !prev);
		} catch (error) {
			console.error('Error adding to favorites:', error);
		}
	}

	const addToWatchList = async () => {
		await axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TBDB_KEY}&session_id=${localStorage.getItem("session_id")}`, watchlistOptions)

		setIsMovieWatchListed((prev) => !prev);
	}

	const handleMauseMove = (e) => {
		const element = e.target;

		const xVal = e.clientX
		const yVal = e.clientY

		const width = element.offsetWidth;
		const height = element.offsetHeight;

		const yRotation = 15 * ((xVal - width / 2) / width)
		const xRotation = -15 * ((yVal - height / 2) / height)

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
	if (error) {
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
					src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title}
				/>
			</Grid>
			<Grid item container direction="column" lg={7}>
				<Typography variant="h3" align="center" gutterBottom>
					{`${data?.title} (${(data.release_date.split("-")[0])})`}
				</Typography>
				<Typography variant="h5" align="center" gutterBottom>
					{data?.tagline}
				</Typography>
				<styles.ContainerSpaceAround item>
					<Box display="flex" align="center" justifyContent="center">
						<Tooltip disableTouchListener title={`${data.vote_average} / 10`}>
							<div>
								<Rating readOnly value={data.vote_average / 2} precision={0.1} />
							</div>
						</Tooltip>
						<Typography variant="subtitle1" gutterBottom sx={{ ml: "10px" }}>
							{data?.vote_average} / 10
						</Typography>
					</Box>
					<Typography variant="h6" align="center" gutterBottom sx={{ transform: "translateY(-3px)" }}>
						{data?.runtime} min {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ""}
					</Typography>
				</styles.ContainerSpaceAround>
				<styles.GenreContainer item>
					{data?.genres?.map(genre => {
						return (
							<Link
								key={genre.id}
								to="/"
								onClick={() => dispatch(selectGenreOrCategory(genre.id))}
								style={styles.links}>
								<styles.GenreImage src={genreIcons[genre.name.toLowerCase()]} alt="" height={30} />
								<Typography color="textPrimary" variant="subtitle1">
									{genre?.name}
								</Typography>
							</Link>
						)
					})}
				</styles.GenreContainer>
				<Typography variant="h5" gutterBottom sx={{ mt: "10px" }}>
					Overview
				</Typography>
				<Typography sx={{ mb: "2rem" }}>
					{data?.overview}
				</Typography>
				<Typography variant="h5" gutterBottom >
					Top Cast
				</Typography>
				<Grid item container spacing={2}>
					{
						data && data.credits?.cast?.map(char => (
							char.profile_path && (
								<Grid
									key={char.id}
									item xs={4} md={2}
									component={Link}
									to={`/actors/${char.id}`}
									sx={{ textDecoration: "none" }}
								>
									<styles.CastImage
										src={`https://image.tmdb.org/t/p/w500/${char.profile_path}`}
										alt={char.name}
									/>
									<Typography color="textPrimary">
										{char?.name}
									</Typography>
									<Typography color="textSecondary">
										{char?.character.split("/")[0]}
									</Typography>
								</Grid>
							))).slice(0, 6)
					}
				</Grid>
				<Grid item container sx={{ mt: "2rem" }}>
					<styles.ButtonsContainer>
						<styles.ButtonsContainer item sx={12} sm={6}>
							<ButtonGroup size="medium" variant="outlined">
								<Button
									target="_blank"
									rel="noopener norefer"
									href="data?.homepage"
									endIcon={<Language />}
								>
									Website
								</Button>
								<Button
									target="_blank"
									rel="noopener norefer"
									href={`https://www.imdb.com/title/${data?.imdb_id}`}
									endIcon={<Movie />}
								>
									IMDB
								</Button>
								<Button
									onClick={() => setOpen(true)}
									href="#"
									endIcon={<Theaters />}
								>
									Trailer
								</Button>
							</ButtonGroup>
						</styles.ButtonsContainer>
						<styles.ButtonsContainer item sx={12} sm={6}>
							<ButtonGroup size="medium" variant="outlined">
								<Button
									onClick={addToFavorites}
									endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}
								>
									{isMovieFavorited ? "Unfavorite" : "Favorite"}
								</Button>
								<Button
									onClick={addToWatchList}
									endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}
								>
									Watchlist
								</Button>
								<Button
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
							</ButtonGroup>
						</styles.ButtonsContainer>
					</styles.ButtonsContainer>
				</Grid>
			</Grid>
			<Box marginTop="5rem" width="100%">
				<Typography variant="h3" gutterBottom align="center">
					You might also like
				</Typography>
				{
					recommendations ? <MovieList movies={recommendations} /> : <Box>Sorry, nothing was found</Box>
				}
			</Box>
			<styles.CustomModal
				closeAfterTransition
				open={open}
				onClose={() => setOpen(false)}
			>
				{data?.videos?.results?.length > 0 && (
					<styles.Video
						src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
						allow="autoplay"
						autoPlay
						title="Trailer"
					/>
				)}
			</styles.CustomModal>
		</styles.ContainerSpaceAround>
	)
}

export default MovieInformation;