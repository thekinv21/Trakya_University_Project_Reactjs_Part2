import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "../store/auth/auth.slice";
import LinksSlicer from "./route-link/LinksSlicer";
import reservedRestaurantSlice from "./reserved/reserved.restaurant.slice";


export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
    Auth: AuthSlicer,
    Reserved: reservedRestaurantSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
