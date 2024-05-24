import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, useTheme, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import redLogo from "../../assets/redLogo.png"
import blueLogo from "../../assets/blueLogo.png"
import genreIcons from "../../assets/genres"
import { useGetGenresQuery } from "../../services/TMDB";
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
	const { genreIdOrCategoryName } = useSelector(state => state.genreOrCategory)

	const handleSelectGenreOrCategory = (value) => {
		dispatch(selectGenreOrCategory(value))
	}

	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center">
				<CircularProgress />
			</Box>
		)
	}

	const prepareCategories = (categories) => {
		return categories.map(({ label, value }) => {
			if (genreIdOrCategoryName === value) {
				return (
					<Link key={value} style={styles.links} to="/">
						<ListItem>
							<ListItemButton style={styles.activeLink} onClick={() => handleSelectGenreOrCategory(value)}>
								<ListItemIcon>
									<styles.GenreImage src={genreIcons[label.toLowerCase()]} alt="" height={30} />
								</ListItemIcon>
								<ListItemText primary={label} />
							</ListItemButton>
						</ListItem>
					</Link>
				)
			}
			return (
				<Link key={value} style={styles.links} to="/">
					<ListItem>
						<ListItemButton onClick={() => handleSelectGenreOrCategory(value)}>
							<ListItemIcon>
								<styles.GenreImage src={genreIcons[label.toLowerCase()]} alt="" height={30} />
							</ListItemIcon>
							<ListItemText primary={label} />
						</ListItemButton>
					</ListItem>
				</Link>
			)
		})
	}

	const renderCategories = prepareCategories(categories);

	const prepareGenres = (data) => {
		return data.genres.map(({ id, name }) => {
			if (genreIdOrCategoryName === id) {
				return (
					<Link key={id} style={styles.links} to="/">
						<ListItem>
							<ListItemButton style={styles.activeLink} onClick={() => handleSelectGenreOrCategory(id)}>
								<ListItemIcon>
									<styles.GenreImage src={genreIcons[name.toLowerCase()]} alt="" height={30} />
								</ListItemIcon>
								<ListItemText primary={name} />
							</ListItemButton>
						</ListItem>
					</Link>
				)
			}
			return (
				<Link key={id} style={styles.links} to="/">
					<ListItem>
						<ListItemButton onClick={() => handleSelectGenreOrCategory(id)}>
							<ListItemIcon>
								<styles.GenreImage src={genreIcons[name.toLowerCase()]} alt="" height={30} />
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				</Link>
			)
		})
	}

	const renderGenres = prepareGenres(data);

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