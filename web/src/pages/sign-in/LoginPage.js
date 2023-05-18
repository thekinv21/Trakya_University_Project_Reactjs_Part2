import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import LoginContainer from "../../components/container/LoginContainer";
import Logo from "../../assets/brand/Logo.svg";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginKarikatur from "./components/LoginKarikatur/LoginKarikatur";

const LoginPage = () => {
  return (
    <React.Fragment>
      {/*========================ALERT CONTAİNER==================*/}
      <ToastContainer />

      <LoginContainer>
        {/*==================KARIKATUR AND SIGNUP LİNK=============*/}

        <LoginKarikatur />

        {/*======================REZZTORAN LOGO====================*/}

        <Stack display={["none", "none", "none", "block"]}>
          <Image
            draggable="false"
            position="relative"
            left="-130px"
            src={Logo}
          />
        </Stack>

        {/*==================REZZTORAN SIGNIN FORM=================*/}

        <Stack>
          <LoginForm />
        </Stack>
      </LoginContainer>
    </React.Fragment>
  );
};

export default LoginPage;
