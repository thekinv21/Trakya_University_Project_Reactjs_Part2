import { createSlice } from "@reduxjs/toolkit";
import { BiRestaurant } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { FaStar, FaUser, FaHeart, FaComment } from "react-icons/fa";

const initialState = {
  LoginLinks: [
    {
      name: "Rezervasyonlar",
      href: "/reservations",
      icon: <GiNotebook fontSize="18px" />,
    },
    {
      name: "Restoranlar",
      href: "/discover",
      icon: <BiRestaurant fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "/favorites",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Categoriler",
      href: "/discover",
      icon: <FaStar fontSize="18px" />,
    },
    {
      name: "Profilim",
      href: "/profile",
      icon: <FaUser fontSize="18px" />,
    },
  ],

  LogoutLinks: [
    {
      name: "Restoranlar",
      href: "/discover",
      icon: <BiRestaurant fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "/favorites",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Categoriler",
      href: "#",
      icon: <FaStar fontSize="18px" />,
    },
  ],

  profileLinks: [
    {
      name: "Rezervasyonlar",
      href: "/reservations",
      icon: <GiNotebook fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "/favorites",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Categoriler",
      href: "#",
      icon: <FaStar fontSize="18px" />,
    },
    {
      name: "Profilim",
      href: "/profile",
      icon: <FaUser fontSize="18px" />,
    },

    {
      name: "Yorumlar",
      href: "#",
      icon: <FaComment fontSize="18px" />,
    },
  ],
};

export const Links = createSlice({
  name: "Links",
  initialState,

  reducers: {},
});

export default Links.reducer;
