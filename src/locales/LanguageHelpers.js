import Turkish from "./tr/tr.json";
import English from "./en/en.json";
import { FormattedMessage } from "react-intl";


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
    else if (locale === "en-US") {
        return locale
    } else {
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