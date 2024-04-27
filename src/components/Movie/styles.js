import { styled, Grid, Typography } from "@mui/material";

export const useStyles = () => {

	const Movie = styled(Grid)(() => ({
		padding: "10px",
	}))

	const links = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		fontWeight: "bolder",
		textDecorationLine: "none",
		"&:hover": {
			cursor: "pointer",
		},
		// [theme.breakpoints.up("xs")]: {
		// 	display: "flex",
		// 	flexDirection: "column",
		// }
	}

	const Image = styled("img")(() => ({
		borderRadius: "20px",
		height: "300px",
		marginBottom: "10px",
		transition: "ease .3s",
		"&:hover": {
			transform: "scale(1.05)",
		},
	}))

	const Title = styled(Typography)(({theme}) => ({
		color: theme.palette.text.primary,
		textOverflow: "ellipsis",
		width: "190px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		marginTop: "10px",
		marginBottom: 0,
		textAlign: "center",
		position: "relative",
	}))

	return { Movie, Title, links, Image }
}