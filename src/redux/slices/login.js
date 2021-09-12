import {
    createSlice,
    createSelector,
    createAsyncThunk
} from "@reduxjs/toolkit";

//Actions
export const loginAction = createAsyncThunk(
    "loginAction",
    async (params, thunkApi) => {
        try {
            //const response = service.authenticate(params.email, params.name, params.password) 
            //service call will be made normally. 
            const response = { token: 'abc' };
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue({
                error: "Oopss, something went wrong...",
            });
        }
    }
);

export const initialState = {
    name: '',
    email: '',
    token: undefined
};

const login = createSlice({
    name: "login",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        logout: () => initialState
    },
    extraReducers: {
        [loginAction.fulfilled]: (state, action) => {
            state.token = action.payload.token;
        },
        [loginAction.rejected]: (state, action) => {
            state.error = action.error;
        }
    }
});

// Actions generated from the slice
export const { setName, setEmail, logout } = login.actions;

export const loginStates = createSelector(
    (state) => ({
        name: state.login.name,
        email: state.login.email,
        token: state.login.token
    }),
    (state) => state
);

// export The reducer
const loginReducer = login.reducer;
export default loginReducer;
