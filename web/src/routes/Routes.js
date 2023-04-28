import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import Main from "../pages/main/Main";
import Notfound from "../pages/notfound/Notfound";
import Profile from "../pages/profile/Profile";
import Restaurant from "../pages/restaurant/Restaurant";
import Discover from "../pages/discover/Discover";
import Reservations from "../pages/reservations/Reservations";
import ResetPassword from "./../pages/resetPassword/ResetPassword";
import NewPasswordForm from "../pages/resetPassword/components/NewPasswordForm";
import Favorites from "../pages/favorites/Favorites";

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
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/new_password" element={<NewPasswordForm />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routers;
