import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "../store/auth/auth.slice";
import LinksSlicer from "./route-link/LinksSlicer";

export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
    Auth: AuthSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
