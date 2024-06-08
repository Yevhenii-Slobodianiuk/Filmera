import { Modal, useTheme, Grid, styled, Box } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const ContainerSpaceAround = styled(Grid)(({ theme }) => ({
		display: "flex",
		justifyContent: "space-around",
		margin: "10px 0 10px 10px !important",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			flexWrap: "wrap",
		}
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
			width: "65%",
			height: "400px",
			marginBottom: "30px",
		},
		[theme.breakpoints.down("sm")]: {
			margin: "0 auto",
			width: "100%",
			height: "400px",
			marginBottom: "30px",
		},
	}))

	const ButtonsContainer = styled("div")(({ theme }) => ({
		display: "flex",
		justifyContent: "space-between",
		width: "70%",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column"
		},
	}))

	const ButtonsGroup = styled(Box)(() => ({
		display: "flex",
		width: "100%",
		justifyContent: "center"
	}))

	return {
		ContainerSpaceAround,
		Poster,
		ButtonsContainer,
		ButtonsGroup
	}
}
