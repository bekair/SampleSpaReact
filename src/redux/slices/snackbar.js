import {
    createSlice,
    createSelector,
} from "@reduxjs/toolkit";
import MessageType from '../../constants/MessageType'

export const initialState = {
    snackbarOpen: false,
    snackbarMessageType: MessageType.SUCCESS,
    snackbarMessage: ''
};

const snackbar = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        openSnackbar: (state, action) => {
            state.snackbarOpen = true;
            state.snackbarMessageType = action.payload.messageType;
            state.snackbarMessage = action.payload.message;
        },
        closeSnackbar: (state, _action) => {
            state.snackbarOpen = false;
        }
    }
});

// Actions generated from the slice
export const { openSnackbar, closeSnackbar } = snackbar.actions;

export const snackbarStates = createSelector(
    (state) => ({
        snackbarOpen: state.snackbar.snackbarOpen,
        snackbarMessageType: state.snackbar.snackbarMessageType,
        snackbarMessage: state.snackbar.snackbarMessage
    }),
    (state) => state
);

// export The reducer
const snackbarReducer = snackbar.reducer;
export default snackbarReducer;