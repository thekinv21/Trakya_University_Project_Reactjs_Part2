import React from "react";
import { Card, Stack, Text } from "@chakra-ui/react";
import Buttons from "../../../shared/button/Button";
import { useNavigate } from "react-router-dom";

const EditPassword = () => {
  //?-----------------Navigation setup-------------
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/*=================Change Password Container=================== */}
      <Card
        color="#000"
        h="100px"
        alignItems="center"
        justifyContent="center"
        w="100%"
        bg="blackAlpha.300"
      >
        <Stack direction="column" w="80%" spacing={5} pb={5}>
          <Text pt={2}>Mevcut Şifreyi sifirla</Text>

          {/*=====================Change Password Button================= */}
          <Buttons
            height={8}
            title="Değiştir"
            fontsize={12}
            background="orange"
            color="#ddd"
            fontweight={100}
            onclick={() => navigate("/reset")}
          />
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default EditPassword;
