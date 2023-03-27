import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import EditContainer from "./components/EditContainer";
import EditForm from "./components/EditForm";
import EditPassword from "./components/EditPassword";

const UserEdit = () => {
  return (
    <React.Fragment>
      {/*==================EDİT CARD CONTAİNER=============== */}

      <Stack direction="column" spacing={6}>
        {/*==================EDİT CARD TİTLE=============== */}

        <Text
          textAlign="start"
          fontSize={["18px", "22px", "24px", "30px"]}
          fontFamily="revert"
        >
          Özel Personel Bilgiler
        </Text>

        {/*================== EDİT CARD CONTENT=============== */}

        <EditContainer>
          {/*==================EDİT CARD FORMS=============== */}

          <EditForm />
        </EditContainer>

        {/*================EDİT CARD CHANGE PASSWORD========*/}

        <EditPassword />
      </Stack>
    </React.Fragment>
  );
};

export default UserEdit;
