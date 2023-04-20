import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRestaurant: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,

  reducers: {
    //?=============FAVORİLERE EKLE==================

    toogleFavorites: (state, action) => {
      const restaurant = action.payload;

      const isExists = state.favoriteRestaurant.some(
        (rest) => rest.id === restaurant.id
      );

      //?=============EĞER FAVORİLERDE MEVCUT İSE==================
      if (isExists) {
        const index = state.favoriteRestaurant.findIndex(
          (rest) => rest.id === restaurant.id
        );

        //?==================FAVORİLERDEN ÇIKART=================
        if (index !== -1) state.favoriteRestaurant.splice(index, 1);
      }

      //?=============EĞER FAVORİLERDE YOKSA EKLE==================
      else state.favoriteRestaurant.push(restaurant);
    },
  },
});

export const { toogleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
