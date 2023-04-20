import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  myToken: undefined,
  myDetails: {},
};

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //?============KULLANICI GİRİŞ YAPTIYSA=============
    
    setAuth: (state, action) => {
      state.myToken = action.payload.myToken || state.myToken;
      state.myDetails = action.payload.myDetails || state.myDetails;
      state.isLoggedIn = true;
    },

    //?============KULLANICI GİRİŞ YAPMADIYSA=============

    resetAuth: (state, action) => {
      state.myToken = undefined;
      state.myDetails = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setAuth, resetAuth } = authStore.actions;
export default authStore.reducer;
