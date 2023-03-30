import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservedRestaurants: [],
  favoriteRestaurants: [],
};

export const Restaurants = createSlice({
  name: "Restaurants",
  initialState,

  reducers: {
    //*===================CREATE RESERVATİONS====================

    addReservation: (state, action) => {
      state.reservedRestaurants = [
        {
          restaurantName: action.payload.restaurantName,
          restaurantAddress: action.payload.restaurantAddress,
          restaurantImage: action.payload.restaurantImage,
          reservedPeopleName: action.payload.reservedPeopleName,
          reservedPeopleSurname: action.payload.reservedPeopleSurname,
          reservedPeoplePhone: action.payload.reservedPeoplePhone,
          reservedPeopleComment: action.payload.reservedPeopleComment,
          reserveId: action.payload.reserveId,
          reserveDate: action.payload.reserveDate,
          reserveTime: action.payload.reserveTime,
          reservePeoples: action.payload.reservePeoples,
        },
        ...state.reservedRestaurants,
      ];
    },
  },
});

export const { addReservation } = Restaurants.actions;

export default Restaurants.reducer;
