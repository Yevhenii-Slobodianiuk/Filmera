import { Modal, useTheme, Grid, styled } from "@mui/material";
import { width } from "@mui/system";

export const useStyles = () => {
	const theme = useTheme();

	const ContainerSpaceAround = styled(Grid)(({ theme }) => ({
		display: "flex",
		justifyContent: "space-around",
		margin: "10px auto !important",
		[theme.breakpoints.down("sm")]: {
			width: "300px",
			flexDirection: "column",
			flexWrap: "wrap",
		}
	}))

	const GenreContainer = styled(Grid)(({ theme }) => ({
		margin: "10px 0 !important",
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
	}))

	const links = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: theme.palette.text.primary,
		textDecoration: "none",
		gap: "10px",
		[theme.breakpoints.down("sm")]: {
			padding: "0.5rem 1rem"
		},
	}

	const GenreImage = styled("img")(({ theme }) => ({
		filter: theme.palette.mode === "dark" ? "invert(1)" : "dark"
	}))

	const Poster = styled("img")(({ theme }) => ({
		borderRadius: "20px",
		display: "block",
		boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
		width: "80%",
		transition: "transform 0.1s",
		[theme.breakpoints.down("lg")]: {
			marginBottom: "30px",
		},
		[theme.breakpoints.down("md")]: {
			margin: "0 auto",
			width: "55%",
			height: "400px",
			marginBottom: "30px",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "0 auto",
			width: "90%",
			height: "400px",
			marginBottom: "30px",
		},
	}))

	const CastImage = styled("img")(() => ({
		width: "100%",
		maxWidth: "7em",
		height: "8em",
		objectFit: "cover",
		borderRadius: "10px"
	}))

	const ButtonsContainer = styled("div")(({ theme }) => ({
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column"
		},
	}))

	const CustomModal = styled(Modal)(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}))

	const Video = styled("iframe")(({ theme }) => ({
		width: "50%",
		height: "50%",
		[theme.breakpoints.down("sm")]: {
			width: "90%",
			height: "90%",
		},
	}))

	return {
		ContainerSpaceAround,
		Poster,
		GenreImage,
		GenreContainer,
		links,
		CastImage,
		ButtonsContainer,
		CustomModal,
		Video
	}
}
