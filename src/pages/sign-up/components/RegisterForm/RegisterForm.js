import { Heading, VStack, FormControl } from "@chakra-ui/react";
import Buttons from "../../../../components/shared/button/Button";
import { useAuthRegister } from "./useAuthRegister";
import LoginWith from "./../../../sign-in/components/LoginForm/components/LoginWith";
import NameInput from "./components/NameInput";
import SurnameInput from "./components/SurnameInput";
import EmailInput from "./components/EmailInput";
import UsernameInput from "./../../../sign-in/components/LoginForm/components/UsernameInput";
import PasswordInput from "./../../../sign-in/components/LoginForm/components/PasswordInput";

const RegisterForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    show,
    setShow,
  } = useAuthRegister();

  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "100%", md: 450 }}
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      {/*----------------------Title-------------------------*/}
      <Heading
        w="100%"
        fontSize={["5xl", "5xl", "5xl", "7xl"]}
        fontFamily="VALORANT"
        textAlign="center"
        mb="10px"
      >
        REZZTORAN
      </Heading>

      {/*====================NAME INPUT====================*/}

      <NameInput
        name={"name"}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />

      {/*====================SURNAME INPUT====================*/}

      <SurnameInput
        name={"surname"}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />

      {/*====================EMAİL INPUT====================*/}

      <EmailInput
        name={"mail"}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />

      {/*====================USERNAME INPUT====================*/}

      <UsernameInput
        name={"username"}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
        show={show}
        setShow={setShow}
      />

      {/*====================PASSWORD INPUT====================*/}

      <PasswordInput
        name={"password"}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        values={values}
      />

      {/*====================REGİSTER BUTTON====================*/}

      <FormControl pt={10}>
        <Buttons
          title="Create Account"
          width="full"
          background="#4462F2"
          fontweight={400}
          fontsize={14}
          borderRadius={5}
          type="submit"
        />
      </FormControl>

      {/*====================SİGN UP WİTH====================*/}
      <FormControl>
        <LoginWith />
      </FormControl>
    </VStack>
  );
};

export default RegisterForm;
