import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IntlReduxProvider from './components/IntlReduxProvider';
import { Provider } from 'react-redux';
import theme from './styles/theme';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<IntlReduxProvider>
			<MemoryRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</MemoryRouter>
		</IntlReduxProvider>
	</Provider>,
	document.getElementById('root')
);