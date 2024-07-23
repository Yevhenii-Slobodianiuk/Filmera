import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { Box, CircularProgress } from "@mui/material";

const Pagination = ({ currentPage, totalPages, setPage }) => {
	const styles = useStyles();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (totalPages !== undefined && totalPages !== null) {
			setLoading(false);
		}
	}, [totalPages]);

	if (loading) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<CircularProgress />
			</Box>
		);
	}

	if (totalPages === 0) return null;

	const handlePrev = () => {
		if (currentPage !== 1) {
			setPage((prevPage) => prevPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage !== totalPages) {
			setPage((prevPage) => prevPage + 1)
		}
	}

	return (
		<styles.Container>

			<styles.ToggleButton
				onClick={handlePrev}
				variant="contained"
				color="primary"
				type="button">
				Prev
			</styles.ToggleButton>

			<styles.PageNumber variant="h4">
				{currentPage}
			</styles.PageNumber>

			<styles.ToggleButton
				onClick={handleNext}
				variant="contained"
				color="primary"
				type="button">
				Next
			</styles.ToggleButton>

		</styles.Container>
	)
}

export default Pagination