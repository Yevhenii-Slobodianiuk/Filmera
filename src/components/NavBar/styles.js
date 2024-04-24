import { IconButton, Toolbar, styled } from "@mui/material";

const CustomToolbar = styled(Toolbar)(({theme}) => ({
	height: "80px",
	display: "flex",
	justifyContent: "space-between",
	marginLeft: "240px",
	[theme.breakpoints.down("sm")]: {
		marginLeft: 0,
		flexWrap: "wrap"
	}
}))

const MenuButton = styled(IconButton)(({theme}) => ({
	marginRight: theme.spacing(2),
	[theme.breakpoints.up("sm")]: {
		display: "none",
	}
}))

export { CustomToolbar, MenuButton }

// const PREFIX = 'MuiToolbar';

// const classes = {
// 	toolbar: `${PREFIX}-root`,
// }

// const CustomToolbar = styled(Toolbar)(() => ({
// 	[`&.${classes.toolbar}`]: {
// 		height: "80px",
// 		display: "flex",
// 		justifyContent: "space-between",
// 		margin: "240px",
// 	}
// }))

// export { CustomToolbar, classes }

