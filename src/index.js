import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IntlReduxProvider from './components/IntlReduxProvider';
import { Provider } from 'react-redux';
import theme from './styles/theme';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<IntlReduxProvider>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</IntlReduxProvider>
	</Provider>,
	document.getElementById('root')
);