import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reserveds: [
    {
      restaurantName: "Yeni Bostanci",
      restaurantAddress: "Yeni Mahale Bostancida",
      restaurantImage:
        "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg",

      reserveId: "334567",
      reserveDate: "22/04/2023",
      reserveTime: "12:30",
      reservePeoples: "5",
      reservedPeopleComment: "Cam Kenari",
    },

    {
      restaurantName: "Kadiköy Lezzeti",
      restaurantAddress: "Yeni Mahale Kadiköy Boğa",
      restaurantImage:
        "https://media.istockphoto.com/id/1307190527/tr/foto%C4%9Fraf/bir-barda-arkada%C5%9F-grubuna-yemek-sunan-mutlu-garson.jpg?s=612x612&w=0&k=20&c=9E51v3Qwc_9efx_SVenuc6CHsG37kVxwS4VWNxtAwro=",

      reserveId: "334562",
      reserveDate: "11/05/2023",
      reserveTime: "12:30",
      reservePeoples: "2",
      reservedPeopleComment: "Ortaya Doğru",
    },

    {
      restaurantName: "Edirne Kebapçisi",
      restaurantAddress: "Saraçlar Edirne",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg",

      reserveId: "134562",
      reserveDate: "09/05/2023",
      reserveTime: "10:30",
      reservePeoples: "1",
      reservedPeopleComment: "Cam Kenari",
    },
    {
      restaurantName: "Kozyataği",
      restaurantAddress: "Yeni Metro Çikişi Bostanci",
      restaurantImage:
        "https://cdn.sortiraparis.com/images/80/100789/834003-too-restaurant-too-hotel-paris-photos-menu.jpg",

      reserveId: "224565",
      reserveDate: "21/07/2023",
      reserveTime: "15:30",
      reservePeoples: "3",
      reservedPeopleComment: "Cam Kenari",
    },
  ],
};

export const reservedRestaurants = createSlice({
  name: "ReservedRestaurants",
  initialState,

  reducers: {
    //*===================CREATE RESERVATİONS====================

    addReservation: (state, action) => {
      state.reserveds = [
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
        ...state.reserveds,
      ];
    },

    //*===================DELETE RESERVATİONS====================

    deleteReservation: (state, action) => {
      state.reserveds = state.reserveds.filter(
        (remove) => remove.reserveId !== action.payload
      );
    },
  },
});

export const { addReservation, deleteReservation } =
  reservedRestaurants.actions;
export default reservedRestaurants.reducer;
