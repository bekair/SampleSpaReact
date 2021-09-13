import Turkish from "./tr/tr.json";
import English from "./en/en.json";
import { FormattedMessage } from "react-intl";
import { getLanguageComboBoxOptions } from "../helpers/ProjectHelper";

export const getLangJson = (locale) => {
    if (locale === "tr")
        return Turkish;
    else if (locale === "en-US") {
        return English
    } else {
        return English;
    }

}

export const getLocale = (locale) => {
    if (locale === "tr")
        return locale;
    else {
        return "en-US";
    }
}

export const LanguageFormatter = (props) => {
    const { id, ...rest } = props;

    return (
        <FormattedMessage
            id={id}
            defaultMessage={getLangJson("tr")[id]}
            {...rest}
        />
    )
}

export const messageFormatter = (id) => {
    return { id: id, defaultMessage: getLangJson("en-US")[id] };
}

export const getLanguageSelectedItem = (locale) => {
    const languageOptions = getLanguageComboBoxOptions(locale);
    return languageOptions.filter(option => option.value === locale)[0];
}