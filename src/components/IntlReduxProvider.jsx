import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { localizationStates } from "../redux/slices/localization";

const IntlReduxProvider = (props) => {
    const {locale, localeFile} = useSelector(localizationStates);

    return (
        <IntlProvider locale={locale} messages={localeFile}>
            {props.children}
        </IntlProvider>
    );
}

export default IntlReduxProvider;