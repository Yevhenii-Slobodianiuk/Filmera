// import { useEffect } from "react";
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, useTheme, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

const demoCategories = [
	{ label: "Comedy", value: "comedy" },
	{ label: "Action", value: "action" },
	{ label: "Horror", value: "horror" },
	{ label: "Animation", value: "animation" },
];
const generalCategories = [
	{ label: "Popular", value: "popular" },
	{ label: "Top Rated", value: "top_rated" },
	{ label: "Upcoming", value: "upcoming" }
];

const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles();

	const renderCategories = (categories) => {
		return categories.map(({ label, value }) => (
			<Link key={value} style={styles.links}>
				<ListItem>
					<ListItemButton onClick={() => { }}>
						{/* <ListItemIcon>
						<styles.GenreImage src={blueLogo} alt="" height={30} />
					</ListItemIcon> */}
						<ListItemText primary={label} />
					</ListItemButton>
				</ListItem>
			</Link>
		))
	}

	const renderGeneralCategories = renderCategories(generalCategories);
	const renderDemoCategories = renderCategories(demoCategories)

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
				{renderGeneralCategories}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{renderDemoCategories}
			</List>
		</>
	)
}

export default Sidebar;