import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import NotfoundContainer from "./components/notfound-container";
import Buttons from "../../components/shared/button/Button";
import { useNavigate } from "react-router-dom";

const Notfound = () => {

  //*--------------------------React navigate------------------------
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NotfoundContainer>
        {/*---------------------Notfound title--------------------------- */}
        <Text fontSize={["20px", "30px", "30px", "40px"]} mt={20}>
          This page wasn't found
        </Text>

        {/*---------------------Notfound gif ımage----------------------- */}
        <Image
          w={800}
          h={500}
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        />

        <Stack direction="column" textAlign="center" spacing={5}>
          {/*---------------------Notfound subtitle-----------------------*/}
          <Text fontSize={["20px", "30px", "30px", "30px"]}>
            Look like you're lost
          </Text>

          {/*---------------------Notfound subtitle-----------------------*/}
          <Text fontSize={["15px", "15px", "15px", "20px"]}>
            the page you are looking for not avaible!
          </Text>

          {/*---------------------Notfound button----------------------- -*/}
          <Buttons
            title="Go home"
            fontsize={13}
            fontweight={100}
            background="green"
            color="#fff"
            onclick={() => navigate("/")}
          />
        </Stack>
      </NotfoundContainer>
    </React.Fragment>
  );
};

export default Notfound;
