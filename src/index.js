import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);


