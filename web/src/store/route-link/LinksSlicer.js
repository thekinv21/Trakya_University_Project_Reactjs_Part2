import { createSlice } from "@reduxjs/toolkit";
import { BiRestaurant } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import {
  FaHome,
  FaAddressCard,
  FaStar,
  FaUser,
  FaHeart,
  FaSignOutAlt,
  FaComment,
} from "react-icons/fa";

const initialState = {
  headerLinks: [
    {
      name: "Ana Sayfa",
      href: "/main",
      icon: <FaHome fontSize="16px" />,
    },
    {
      name: "Hakkimizda",
      href: "#",
      icon: <FaAddressCard fontSize="16px" />,
    },
    {
      name: "Restoranlar",
      href: "/discover",
      icon: <BiRestaurant fontSize="16px" />,
    },
  ],

  navbarLinksLogin: [
    {
      name: "Rezervasyonlar",
      href: "/reservations",
      icon: <GiNotebook fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "#",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Bonus Puanlar",
      href: "#",
      icon: <FaStar fontSize="18px" />,
    },
    {
      name: "Profilim",
      href: "/profile",
      icon: <FaUser fontSize="18px" />,
    },
    {
      name: "Çikiş",
      href: "/signin",
      icon: <FaSignOutAlt fontSize="18px" />,
    },
  ],

  navbarLinksLogout: [
    {
      name: "Restoranlar",
      href: "/discover",
      icon: <BiRestaurant fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "#",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Bonus Puanlar",
      href: "#",
      icon: <FaStar fontSize="18px" />,
    },
    {
      name: "Giriş",
      href: "/signin",
      icon: <FaSignOutAlt fontSize="18px" />,
    },
  ],

  profileLinks: [
    {
      name: "Rezervasyonlar",
      href: "#",
      icon: <GiNotebook fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "#",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Bonus Puanlar",
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

    {
      name: "Çikiş",
      href: "/signin",
      icon: <FaSignOutAlt fontSize="18px" />,
    },
  ],
};

export const Links = createSlice({
  name: "Links",
  initialState,

  reducers: {},
});

export default Links.reducer;
