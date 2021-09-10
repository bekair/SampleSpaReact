import { combineReducers } from "redux";
import localizationReducer from "./slices/localization";

export const rootReducer = combineReducers({
    localization: localizationReducer
})