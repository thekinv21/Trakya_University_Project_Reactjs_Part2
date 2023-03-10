import { configureStore } from "@reduxjs/toolkit";
import LinksSlicer from "../redux/LinksSlicer";
import RestaurantSlicer from "../redux/RestaurantSlicer";

export const store = configureStore({
  reducer: {
    Link: LinksSlicer,
    Restaurant: RestaurantSlicer,
  },
});
