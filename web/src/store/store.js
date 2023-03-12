import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "../redux/AuthSlicer";
import LinksSlicer from "../redux/LinksSlicer";
import RestaurantSlicer from "../redux/RestaurantSlicer";

export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
    Restaurant: RestaurantSlicer,
    Auth: AuthSlicer
  },
});


/*
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

*/