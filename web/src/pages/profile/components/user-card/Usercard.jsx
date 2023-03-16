import React from "react";
import UserCardContainer from "./usercard-container";
import { Image, Text } from "@chakra-ui/react";
import User from "../../../../assets/svg/ProfileCardUser.svg";
import UserCardLinks from "./usercard-links";

const Usercard = ({ user }) => {
  return (
    <React.Fragment>
      {/*-------------------------UserCard Container----------------- */}

      <UserCardContainer>
        {/*---------------------User Svg----------------------- */}
        <Image pt={5} src={User} draggable="false" />

        {/*---------------------User name----------------------- */}
        <Text p={5} fontSize={14}>
          Tekrar Hoşgeldin : {user}
        </Text>

        {/*---------------------UserCard Links---------------------- */}
        <UserCardLinks />
      </UserCardContainer>
    </React.Fragment>
  );
};

export default Usercard;
