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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});