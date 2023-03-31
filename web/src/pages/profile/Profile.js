import React from "react";
import Container from "../../components/container/Container";
import { Box } from "@chakra-ui/react";
import UserCard from "../../components/cards/user/UserCard";
import UserEdit from "../../components/cards/user/UserEdit";

const Profile = () => {
  return (
    <React.Fragment>
      {/*=================Profile Container================== */}

      <Container>
        {/*==============RESPONSİVE DEVİCES================*/}

        <Box
          className="container d-flex flex-row justify-content-center p-5 "
          gap={10}
        >
          {/*==================-Profile User Card================ */}

          <UserCard user="Vadim" />

          {/*=====================Profile Edit Card=============== */}

          <UserEdit />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
