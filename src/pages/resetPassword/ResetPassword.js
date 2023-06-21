import React from "react";
import { Box } from "@chakra-ui/react";
import LoginContainer from "./../../components/container/LoginContainer";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import { ToastContainer } from "react-toastify";

const ResetPassword = () => {
  return (
    <React.Fragment>
      {/*=================MAİN CONTAİNER================= */}

      <LoginContainer>
        <Box
          w="100vw"
          h="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/*==================RESET FORM==================== */}
          <PasswordReset />
        </Box>

        {/*=======================ALERT CONTAİNER====================*/}
        <ToastContainer />
      </LoginContainer>
    </React.Fragment>
  );
};

export default ResetPassword;
