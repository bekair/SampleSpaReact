import {
    createSlice,
    createSelector
} from "@reduxjs/toolkit";
import { getLanguageComboBoxOptions } from "../../helpers/ProjectHelper";
import {
    getLangJson, 
    getLanguageSelectedItem, 
    getLocale
} from "../../locales/LanguageHelpers";

const localeDefault = (navigator.languages && navigator.languages[0]) || navigator.language;

export const initialState = {
    locale: getLocale(localeDefault),
    localeFile: getLangJson(localeDefault),
    languageComboBoxOptions: getLanguageComboBoxOptions(localeDefault),
    languageComboBoxSelectedItem: getLanguageSelectedItem(localeDefault),
    error: null
};

const localization = createSlice({
    name: "localization",
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.locale = action.payload;
        },
        setLocaleFile: (state, action) => {
            state.localeFile = action.payload;
        },
        setLanguageComboBoxOptions: (state, action) => {
            state.languageComboBoxOptions = action.payload;
        },
        setLanguageComboBoxSelectedItem: (state, action) => {
            state.languageComboBoxSelectedItem = action.payload;
        }
    }
});

// Actions generated from the slice
export const {
    setLocale,
    setLocaleFile,
    setLanguageComboBoxOptions,
    setLanguageComboBoxSelectedItem
} = localization.actions;

export const localizationStates = createSelector(
    (state) => ({
        locale: state.localization.locale,
        localeFile: state.localization.localeFile,
        languageComboBoxOptions: state.localization.languageComboBoxOptions,
        languageComboBoxSelectedItem: state.localization.languageComboBoxSelectedItem
    }),
    (state) => state
);

// export The reducer
const localizationReducer = localization.reducer;
export default localizationReducer;
