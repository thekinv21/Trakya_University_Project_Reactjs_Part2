import React from "react";
import ResetForm from "./components/ResetForm";
import { Box } from "@chakra-ui/react";
import LoginContainer from "./../../components/container/LoginContainer";

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
          <ResetForm />
              
        </Box>
      </LoginContainer>
    </React.Fragment>
  );
};

export default ResetPassword;
