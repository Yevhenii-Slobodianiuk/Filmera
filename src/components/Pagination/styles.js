import { useTheme, styled, Button, Typography } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const Container = styled("div")(() => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}))

	const ToggleButton = styled(Button)(() => ({
		margin: "30px 2px"
	}))

	const PageNumber = styled(Typography)(() => ({
		margin: "0 20px",
		color: theme.palette.text.primary,
	}))

	return { Container, ToggleButton, PageNumber }
}