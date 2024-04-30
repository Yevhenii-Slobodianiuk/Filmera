import { Grid, styled } from "@mui/material";

export const useStyles = () => {

	const MoviesContainer = styled(Grid)(({theme}) => ({
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		// overflow: "auto",
		[theme.breakpoints.down("md")]: {
			justifyContent: "center",
		}
	}))

	return {
		MoviesContainer,
	}
}
