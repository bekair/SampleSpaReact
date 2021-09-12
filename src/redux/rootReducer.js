import { combineReducers } from "redux";
import localizationReducer from "./slices/localization";
import loginReducer from "./slices/login";

export const rootReducer = combineReducers({
    login: loginReducer,
    localization: localizationReducer
})