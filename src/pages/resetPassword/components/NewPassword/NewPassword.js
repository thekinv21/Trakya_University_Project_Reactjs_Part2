import LoginContainer from "../../../../components/container/LoginContainer";
import { Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import NewPasswordForm from "./components/NewPasswordForm";

const NewPassword = () => {
  return (
    <LoginContainer>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/*================NEW PASSWORD FORM================*/}
        <NewPasswordForm />
      </Box>
      {/*=======================ALERT CONTAİNER====================*/}
      <ToastContainer />
    </LoginContainer>
  );
};

export default NewPassword;
