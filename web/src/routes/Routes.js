import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import Main from "../pages/main/Main";
import Notfound from "../pages/notfound/Notfound";
import Profile from "../pages/profile/Profile";
import Reset from "../pages/resetPassword/Reset";
import Restaurant from "../pages/restaurant/Restaurant";
import Discover from "../pages/discover/Discover";
import Reservations from "../pages/reservations/Reservations";

const Routers = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routers;
