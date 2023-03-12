import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./../pages/sign-in/SignIn";
import SignUp from "./../pages/sign-up/SignUp";
import Main from "../pages/main/Main";
import Notfound from "./../pages/notfound/Notfound";
import Profile from "./../pages/profile/Profile";

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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routers;
