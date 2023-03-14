import React from "react";
import ProfileContainer from "./components/profile-container/profile-container";
import Navbar from "../../components/navbar/Navbar";
import Usercard from "./components/user-card/Usercard";
import Footer from "../../components/footer/Footer";
import { Stack } from "@chakra-ui/react";
import UserEditCard from "./components/edit-card/UserEditCard";

const Profile = () => {
  return (
    <React.Fragment>
      {/*-------------------Profile Page Navbar------------------ */}
      <Navbar />

      {/*-------------------Profile Container------------------ */}
      <ProfileContainer>
        {/*-------------------Profile User Card------------------ */}

        <Stack display={["none", "none", "block", "block"]}>
          <Usercard user="Vadim" />
        </Stack>

        {/*-------------------Profile Edit Card------------------ */}

        <UserEditCard />
      </ProfileContainer>

      {/*-------------------Profile Footer------------------ */}
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
