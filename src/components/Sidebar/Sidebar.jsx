// import { useEffect } from "react";
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, useTheme, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import redLogo from "../../assets/redLogo.png"
import blueLogo from "../../assets/blueLogo.png"
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from "../../assets/genres"
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import { useStyles } from "./styles";

const categories = [
	{ label: "Popular", value: "popular" },
	{ label: "Top Rated", value: "top_rated" },
	{ label: "Upcoming", value: "upcoming" },
]

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles();
	const { data, isFetching } = useGetGenresQuery();
	const dispatch = useDispatch();
	const { genreIdOrCategoryName } = useSelector(state => state.genreOrCategory);

	const handleSelectGenreOrCategory = (value) => {
		dispatch(selectGenreOrCategory(value))
	}

	const renderFilters = (filters) => {
		return isFetching ? (
			<Box display="flex" justifyContent="center">
				<CircularProgress />
			</Box>
		) : filters.genres ?
			filters.genres.map(({ id, name }) => (
				<Link key={id} style={styles.links}>
					<ListItem>
						<ListItemButton onClick={() => handleSelectGenreOrCategory(id)}>
							<ListItemIcon>
								<styles.GenreImage src={genreIcons[name.toLowerCase()]} alt="" height={30} />
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				</Link>
			)) : filters.map(({ label, value }) => (
				<Link key={value} style={styles.links}>
					<ListItem>
						<ListItemButton onClick={() => handleSelectGenreOrCategory(value)}>
							<ListItemIcon>
								<styles.GenreImage src={genreIcons[label.toLowerCase()]} alt="" height={30} />
							</ListItemIcon>
							<ListItemText primary={label} />
						</ListItemButton>
					</ListItem>
				</Link>
			))
	}

	const renderCategories = renderFilters(categories);
	const renderGenres = renderFilters(data)

	return (
		<>
			<Link to="/" style={styles.imageLink}>
				<styles.Image
					src={theme.palette.mode === "light" ? blueLogo : redLogo}
					alt="Logo"
				/>
			</Link>
			<Divider />
			<List>
				<ListSubheader>Categories</ListSubheader>
				{renderCategories}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{renderGenres}
			</List>
		</>
	)
}

export default Sidebar;