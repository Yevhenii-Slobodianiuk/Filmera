import { useTheme, styled, Box, Card, CardMedia, CardContent } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const Container = styled(Box)(() => ({
		marginBottom: "20px",
		marginLeft: "15px",
		display: "flex",
		justifyContent: "center",
		height: "490px",
		textDecoration: "none",
		[theme.breakpoints.down('md')]: {
			marginLeft: "0px",
		}
	}));

	const CustomCard = styled(Card)(() => ({
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		flexDirection: "column"
	}));

	const CardRoot = styled(Card)(() => ({
		position: "relative",
	}));

	const CustomCardMedia = styled(CardMedia)(() => ({
		position: "absolute",
		top: 0,
		right: 0,
		height: "100%",
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.575)",
		backgroundBlendMode: "darken",
	}));

	const CustomCardContent = styled(CardContent)(() => ({
		color: "#fff",
		width: "50%",
		[theme.breakpoints.down('md')]: {
			width: "100%",
		}
	}));

	return { Container, CustomCard, CardRoot, CustomCardMedia, CustomCardContent }
}