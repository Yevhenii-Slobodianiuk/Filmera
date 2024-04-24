import { styled } from "@mui/material";

const Root = styled("div")(() => ({
	display: "flex",
	height: "100%",
}))

const Toolbar = styled("div")(() => ({
	height: "70px",
}))

const Content = styled("main")(() => ({
	flexGrow: 1,
	padding: "2em",
}))

export {Root, Toolbar, Content}

