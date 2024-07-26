import { Button, IconButton, Toolbar, styled } from "@mui/material";

export const useStyles = () => {
	const drawerWidth = 240

	const CustomToolbar = styled(Toolbar)(({ theme }) => ({
		height: "80px",
		display: "flex",
		justifyContent: "space-between",
		marginLeft: "240px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			flexWrap: "wrap",
		}
	}))

	const MenuButton = styled(IconButton)(({ theme }) => ({
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		}
	}))

	const CustomDrawer = styled("nav")(({ theme }) => ({
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	}))

	const LinkButton = styled(Button)(() => ({
		"&:hover": {
			color: "white !important",
			textDecoration: "none"
		}
	}))

	return {
		CustomToolbar,
		MenuButton,
		CustomDrawer,
		LinkButton,
		drawerWidth
	}
}

// const CustomToolbar = styled(Toolbar)(({theme}) => ({
// 	height: "80px",
// 	display: "flex",
// 	justifyContent: "space-between",
// 	marginLeft: "240px",
// 	[theme.breakpoints.down("sm")]: {
// 		marginLeft: 0,
// 		flexWrap: "wrap"
// 	}
// }))

// const MenuButton = styled(IconButton)(({theme}) => ({
// 	marginRight: theme.spacing(2),
// 	[theme.breakpoints.up("sm")]: {
// 		display: "none",
// 	}
// }))

// const CustomDrawer = styled("nav")(({theme}) => ({
// 	[theme.breakpoints.up('sm')]: {
// 		width: drawerWidth,
// 		flexShrink: 0,
// 	},
// }))

// const LinkButton = styled(Button)(() => ({
// 	"&:hover": {
// 		color: "white !important",
// 		textDecoration: "none"
// 	}
// }))

// export { CustomToolbar, MenuButton, CustomDrawer, drawerWidth, LinkButton }
