import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    myToken: undefined,
    myDetails: {},
}

export const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.myToken = action.payload.myToken || state.myToken;
            state.myDetails = action.payload.myDetails || state.myDetails;
            state.isLoggedIn = true;
        },
        resetAuth: (state) => {
            state.myToken = undefined;
            state.isLoggedIn = false;
            state.myDetails = {};
        },
    },
});

export const { setAuth, resetAuth } = authStore.actions;
export default authStore.reducer;

//selam