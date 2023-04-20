import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "../store/auth/auth.slice";
import LinksSlicer from "./route-link/LinksSlicer";
import reservedRestaurantSlice from "./reserved/reserved.restaurant.slice";
import favoritesSlice from "./favorites/favorites.slice";


export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
    Auth: AuthSlicer,
    Reserved: reservedRestaurantSlice,
    Favorites : favoritesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
