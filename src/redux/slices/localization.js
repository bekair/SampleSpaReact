import {
    createSlice,
    createSelector
} from "@reduxjs/toolkit";
import { getLocale } from "../../locales/LanguageHelpers";

export const initialState = {
    locale: getLocale(),
    error: null
};

const localization = createSlice({
    name: "localization",
    initialState,
    reducers: {
        setLocale: (state, action) => {
            state.locale = action.payload;
        }
    }
});

// Actions generated from the slice
export const { setLocale } = localization.actions;

export const localizationStates = createSelector(
    (state) => ({
        locale: state.localization.locale
    }),
    (state) => state
);

// export The reducer
const localizationReducer = localization.reducer;
export default localizationReducer;
