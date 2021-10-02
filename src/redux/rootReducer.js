import { combineReducers } from "redux";
import localizationReducer from "./slices/localization";
import loginReducer from "./slices/login";
import snackbarReducer from "./slices/snackbar";

export const rootReducer = combineReducers({
    login: loginReducer,
    localization: localizationReducer,
    snackbar: snackbarReducer
})