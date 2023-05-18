import { Stack, Image } from "@chakra-ui/react";
import Logo from "../../assets/brand/Logo.svg";
import LoginContainer from "../../components/container/LoginContainer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import RegisterKarikatur from "./components/RegisterKarikatur/RegisterKarikatur";

const RegisterPage = () => {
  return (
    <LoginContainer>
      {/*==================KARİKATUR AND SİGNUP=============*/}
      <RegisterKarikatur />

      {/*=========================LOGO======================*/}

      <Stack display={["none", "none", "none", "block"]}>
        <Image draggable="false" position="relative" left="-130px" src={Logo} />
      </Stack>

      {/*==================REGİSTER FORM=================== */}

      <Stack>
        <RegisterForm />
      </Stack>
    </LoginContainer>
  );
};

export default RegisterPage;
