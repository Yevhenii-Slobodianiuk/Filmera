import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchMovie } from "../../features/currentGenreOrCategory";
import { useStyles } from "./styles";

const Search = () => {
	const [query, setQuery] = useState("")
	const styles = useStyles();
	const dispatch = useDispatch();

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			dispatch(searchMovie(query))
		}
	}

	return (
		<styles.SearchContainer>
			<styles.SearchInput
				inputRef={input => input && input.focus()}
				onKeyDown={(e) => handleKeyPress(e)}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				variant="standard"
				InputProps={{
					placeholder: "Enter film title",
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					)
				}}
			/>
		</styles.SearchContainer>
	)
}

export default Search