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
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
      >
        <Stack direction="column" w="80%" spacing={5} pb={5}>
          <Text pt={2}>Mevcut Şifreyi sifirla</Text>

          {/*=====================Change Password Button================= */}
          <Buttons
            height={8}
            title="Değiştir"
            fontsize={12}
            background="orange"
            color="#fff"
            fontweight={100}
            onclick={() => navigate("/reset_password")}
          />
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default EditPassword;
