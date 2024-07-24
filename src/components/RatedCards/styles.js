import { useTheme, styled, Box } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const Container = styled(Box)(() => ({
		margin: "20px 20px",
	}))

	return { Container };
}