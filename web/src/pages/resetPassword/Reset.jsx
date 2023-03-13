import React from "react";
import LoginContainer from "./../../components/containers/login-container/Login-containers";
import { Stack } from "@chakra-ui/react";
import ResetForm from "./components/form/reset-form";

const Reset = () => {
  return (
    <React.Fragment>
      {/*---------------------ResetContainer---------------- */}

      <LoginContainer>
        {/*---------------------Resetkarikatır---------------- */}

        <Stack justifyContent="center" w="100%">
          <ResetForm />
        </Stack>
      </LoginContainer>
    </React.Fragment>
  );
};

export default Reset;
