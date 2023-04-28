import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRestaurant: [
    {
      id: "1",
      restaurantImage:
        "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg",
      title: "Restaurant",
      city: "Kocaeli",
      district: "Merkez",
      restaurantName: "Kocaeli Kebap Restaurant",
      detailedAddress: "Kocaeli Merkez Cami , Balabana Yakin",
      starCount: "4",
    },
    {
      id: "2",
      restaurantImage:
        "https://media.istockphoto.com/id/1307190527/tr/foto%C4%9Fraf/bir-barda-arkada%C5%9F-grubuna-yemek-sunan-mutlu-garson.jpg?s=612x612&w=0&k=20&c=9E51v3Qwc_9efx_SVenuc6CHsG37kVxwS4VWNxtAwro=",
      title: "Restaurant",
      city: "Kocaeli",
      district: "Merkez",
      restaurantName: "Kocaeli Kebap Restaurant",
      detailedAddress: "Kocaeli Merkez Cami , Balabana Yakin",
      starCount: "4",
    },

    {
      id: "3",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",
      title: "Restaurant",
      city: "Kocaeli",
      district: "Merkez",
      restaurantName: "Kocaeli Kebap Restaurant",
      detailedAddress: "Kocaeli Merkez Cami , Balabana Yakin",
      starCount: "3",
    },
    {
      id: "4",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834003-too-restaurant-too-hotel-paris-photos-menu.jpg",
      title: "Restaurant Merkez",
      city: "İstanbul",
      district: "Merkez",
      restaurantName: "İstanbul Yeni Restaurant",
      detailedAddress: "İstanbul Kartal Metro Çikişina Yakin",
      starCount: "5",
    },
    {
      id: "5",
      restaurantImage:
        "https://media.istockphoto.com/id/1307190527/tr/foto%C4%9Fraf/bir-barda-arkada%C5%9F-grubuna-yemek-sunan-mutlu-garson.jpg?s=612x612&w=0&k=20&c=9E51v3Qwc_9efx_SVenuc6CHsG37kVxwS4VWNxtAwro=",
      title: "Restaurant",
      city: "Kocaeli",
      district: "Merkez",
      restaurantName: "Kocaeli Kebap Restaurant",
      detailedAddress: "Kocaeli Merkez Cami , Balabana Yakin",
      starCount: "4",
    },

    {
      id: "6",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",
      title: "Restaurant",
      city: "Kocaeli",
      district: "Merkez",
      restaurantName: "Kocaeli Kebap Restaurant",
      detailedAddress: "Kocaeli Merkez Cami , Balabana Yakin",
      starCount: "3",
    },
    {
      id: "7",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834003-too-restaurant-too-hotel-paris-photos-menu.jpg",
      title: "Restaurant Merkez",
      city: "İstanbul",
      district: "Merkez",
      restaurantName: "İstanbul Yeni Restaurant",
      detailedAddress: "İstanbul Kartal Metro Çikişina Yakin",
      starCount: "5",
    },
  ],
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
