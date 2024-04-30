import { TextField, styled } from "@mui/material";

export const useStyles = () => {

	const SearchContainer = styled("div")(({ theme }) => ({
		[theme.breakpoints.down("sm")]: {
			display: "flex",
			justifyContent: "center",
			width: "100%",
		}
	}))

	const SearchInput = styled(TextField)(({theme}) => ({
		color: theme.palette.mode === "light" && "black",
		filter: theme.palette.mode === "light" && "invert(1)",
		[theme.breakpoints.down("sm")]: {
			marginTop: "-10px",
			marginBottom: "10px",
		}
	}))

	// const SearchInput = styled("input")(({theme}) => ({
	// 	color: theme.palette.mode === "light" && "black",
	// 	filter: theme.palette.mode === "light" && "invert(1)",
	// 	backgroundColor: "transparent",
	// 	border: "none",
	// 	borderBottom: "3px solid #fff",
	// 	[theme.breakpoints.down("sm")]: {
	// 		marginTop: "-10px",
	// 		marginBottom: "10px",
	// 	}
	// }))

	return { SearchContainer, SearchInput }
}
