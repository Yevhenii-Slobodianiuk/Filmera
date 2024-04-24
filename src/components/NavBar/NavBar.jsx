import React from 'react';
import { AppBar, IconButton, Drawer, Button, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { CustomToolbar, MenuButton } from './styles';

const NavBar = () => {
	const isMobile = useMediaQuery("(max-width:600px)");
	const theme = useTheme();
	const isAuthenticated = true;


	return (
		<>
			<AppBar position='fixed'>
				<CustomToolbar>
					{isMobile && (
						<MenuButton
							color="inherit"
							edge="start"
							style={{ outline: "none" }}
							onClick={() => { }}
						>
							<Menu />
						</MenuButton>
					)}
					<IconButton
						color="inherit"
						sx={{ ml: 1 }}
						onClick={() => { }}
					>
						{theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && "Search..."}
					<div>
						{!isAuthenticated ? (
							<Button
								color="inherit"
								onClick={() => { }}
							>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to={"profile/:id"}
								onClick={() => { }}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar 
									style={{width: "30px", height: "30px"}}
									alt="Profile"
									src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
								/>
							</Button>
						)}
					</div>
					{isMobile && "Search..."}
				</CustomToolbar>
			</AppBar>
		</>
	)
}

export default NavBar;