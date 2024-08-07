import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ToggleColorMode from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToggleColorMode>
				<Router>
					<App />
				</Router>
			</ToggleColorMode>
		</Provider>
	</React.StrictMode>
);


