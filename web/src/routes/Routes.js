import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Notfound from "../pages/notfound/Notfound";
import Profile from "../pages/profile/Profile";
import Discover from "../pages/discover/Discover";
import Reservations from "../pages/reservations/Reservations";
import ResetPassword from "./../pages/resetPassword/ResetPassword";
import NewPassword from "../pages/resetPassword/components/NewPassword/NewPassword";
import Favorites from "../pages/favorites/Favorites";
import RestaurantDetail from "../pages/restaurant_detail/RestaurantDetail";
import LoginPage from "../pages/sign-in/LoginPage";
import RegisterPage from "./../pages/sign-up/RegisterPage";
import { PrivateRoute } from "./Privates";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/new_password" element={<NewPassword />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/main" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
