import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Notfound from "../pages/notfound/Notfound";
import Profile from "../pages/profile/Profile";
import Discover from "../pages/discover/Discover";
import Reservations from "../pages/reservations/Reservations";
import ResetPassword from "./../pages/resetPassword/ResetPassword";
import NewPasswordForm from "../pages/resetPassword/components/NewPasswordForm";
import Favorites from "../pages/favorites/Favorites";
import { PrivateRoute } from "./Privates";
import RestaurantDetail from "../pages/restaurant_detail/RestaurantDetail";
import LoginPage from "../pages/sign-in/LoginPage";
import RegisterPage from "./../pages/sign-up/RegisterPage";

const Routers = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/new_password" element={<NewPasswordForm />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/main" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routers;
