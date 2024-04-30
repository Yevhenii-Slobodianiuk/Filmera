import { useTheme, styled } from "@mui/material";

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

const activeLink = {
	borderRadius: "15px",
	boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",
}

const GenreImage = styled("img")(({ theme }) => ({
	filter: theme.palette.mode === "dark" ? "invert(1)" : "dark"
}))

return { imageLink, Image, links, GenreImage, activeLink }
}