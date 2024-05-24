import { useEffect, useState } from 'react';
import { AppBar, IconButton, Drawer, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';

import { useStyles } from './styles';

const NavBar = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const isMobile = useMediaQuery("(max-width:600px)");
	const theme = useTheme();
	const styles = useStyles();
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(userSelector)

	const token = localStorage.getItem("request_token");
	const sessionIdFromLocalStorage = localStorage.getItem("session_id");

	useEffect(() => {
		const logInUser = async () => {
			if (token) {
				let sessionId = sessionIdFromLocalStorage;
				if (!sessionId) {
					sessionId = await createSessionId();
				}
				if (sessionId) {
					try {
						const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
						dispatch(setUser(userData));
					} catch (error) {
						console.error("Failed to fetch user data:", error);
					}
				}
			}
		};

		logInUser();
	}, [token, dispatch, sessionIdFromLocalStorage]);

	return (
		<>
			<AppBar position='fixed'>
				<styles.CustomToolbar>
					{isMobile && (
						<styles.MenuButton
							color="inherit"
							edge="start"
							style={{ outline: "none" }}
							onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
						>
							<Menu />
						</styles.MenuButton>
					)}
					<IconButton
						color="inherit"
						sx={{ ml: 1 }}
						onClick={() => { }}
					>
						{theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuthenticated ? (
							<styles.LinkButton
								color="inherit"
								onClick={fetchToken}
							>
								Login &nbsp; <AccountCircle />
							</styles.LinkButton>
						) : (
							<styles.LinkButton
								color="inherit"
								component={Link}
								to={`profile/${user.id}`}
								onClick={() => { }}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{ width: "30px", height: "30px" }}
									alt="Profile"
									src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
								/>
							</styles.LinkButton>
						)}
					</div>
					{isMobile && <Search />}
				</styles.CustomToolbar>
			</AppBar>
			<div>
				<styles.CustomDrawer>
					{isMobile ? (
						<Drawer
							variant="temporary"
							anchor="right"
							open={mobileOpen}
							ModalProps={{ keepMounted: true }}
							onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
							classes={{ paper: styles.drawerWidth }}
						>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					) : (
						<Drawer
							variant="permanent"
							open
							classes={{ paper: styles.drawerWidth }}
						>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					)}
				</styles.CustomDrawer>
			</div>
		</>
	)
}

export default NavBar;