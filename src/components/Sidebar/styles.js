import { useTheme, styled } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const imageLink = {
		display: "flex",
		justifyContent: "center",
		padding: "10% 0",
	}
	
	const Image = styled("img")(() => ({
		width: "70%",
	}))

	const links = {
			color: theme.palette.text.primary,
			textDecoration: "none",
	}
	
	const GenreImage = styled("img")(({ theme }) => ({
		filter: theme.palette.mode === "dark" ? "invert(1)" : "dark"
	}))

	return {imageLink, Image, links, GenreImage}
}