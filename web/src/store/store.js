import { configureStore } from "@reduxjs/toolkit";
import LinksSlicer from "../redux/LinksSlicer";

export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
  },
});
