import { VStack } from "@chakra-ui/react";
import { useAuth } from "./useAuth";
import FormTitle from "./components/FormTitle";
import UsernameInput from "./components/UsernameInput";
import PasswordInput from "./components/PasswordInput";
import SignInButton from "./components/SignInButton";
import LoginWith from "./components/LoginWith";

const LoginForm = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    show,
    setShow,
  } = useAuth();

  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "100%", md: 400 }}
      justifyContent={"center"}
      onSubmit={handleSubmit}
    >
      {/*=====================LOGINFORM TITLE=================== */}

      <FormTitle />

      {/*=======================USERNAME INPUT====================*/}

      <UsernameInput
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        touched={touched}
        values={values}
      />

      {/*=======================PASSWORD INPUT====================*/}

      <PasswordInput
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        touched={touched}
        show={show}
        setShow={setShow}
        values={values}
      />

      {/*=======================LOGİN BUTTON====================*/}

      <SignInButton />

      {/*=======================LOGİN WİTH====================*/}

      <LoginWith />
    </VStack>
  );
};

export default LoginForm;
