import { useTheme, styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export const useStyles = () => {
	const theme = useTheme();

	const imageLink = {
		display: "flex",
		justifyContent: "center",
		padding: "10% 0",
	}

	const Image = styled("img")(() => ({
		width: "75%",
		height: "53px"
	}))

	const links = {
		color: theme.palette.text.primary,
		textDecoration: "none",
	}

	const GenreImage = styled("img")(({ theme }) => ({
		filter: theme.palette.mode === "dark" ? "invert(1)" : "dark"
	}))

	return { imageLink, Image, links, GenreImage }
}