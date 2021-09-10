import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IntlProvider } from 'react-intl';
import { Provider, useSelector } from 'react-redux';
import theme from './styles/theme';
import store from './redux/store'
import { getLangJson, getLocale } from './locales/LanguageHelpers';
import { localizationStates } from './redux/slices/localization';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';

debugger;

const Locale = () => {
	const { locale } = useSelector(localizationStates);

	return locale;
}

ReactDOM.render(
	<IntlProvider locale={getLocale(<Locale />)} messages={getLangJson(<Locale />)} >
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</IntlProvider>,
	document.getElementById('root')
);