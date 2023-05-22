import { Image, VStack, FormControl, FormLabel } from "@chakra-ui/react";
import Logo from "../../../../../assets/brand/Logo.svg";
import Inputs from "../../../../../components/shared/Input/Inputs";
import Buttons from "../../../../../components/shared/button/Button";
import { useNewPasswordForm } from "./useNewPasswordForm";

const NewPasswordForm = () => {
  const { handleChange, handleSubmit, values } = useNewPasswordForm();

  return (
    <VStack
      as="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
      padding={10}
      onSubmit={handleSubmit}
      bg="blackAlpha.300"
      spacing={5}
    >
      {/*===================BRAND LOGO==================*/}
      <Image h={400} w={500} src={Logo} draggable="false" cursor="pointer" />

      {/*=====================MAIL INPUT====================*/}

      <FormControl>
        <FormLabel fontSize={12}>E-mail</FormLabel>
        <Inputs
          type={"email"}
          name="email"
          background="#ddd"
          placeholder="E-mail"
          color="#000"
          size="sm"
          outline="none"
          value={values.email}
          onchange={handleChange}
        />
      </FormControl>

      {/*=================INPUT NEW PASSWORD=============*/}
      <FormControl>
        <FormLabel fontSize={12}>Yeni Şifre</FormLabel>
        <Inputs
          name="password"
          background="#ddd"
          placeholder="Yeni Şifre"
          color="#000"
          border="none"
          outline="none"
          size="sm"
          value={values.password}
          onchange={handleChange}
        />
      </FormControl>

      {/*============MAİLE GELEN PİNCODE INPUT==============*/}
      <FormControl>
        <FormLabel fontSize={12} fontWeight="none">
          Maile Gelen Kod
        </FormLabel>

        <Inputs
          type={"text"}
          name="pincode"
          background="#ddd"
          placeholder="Maile Gelen Kod"
          color="#000"
          size="sm"
          maxLength={5}
          outline="none"
          value={values.pincode}
          onchange={handleChange}
        />
      </FormControl>

      {/*====================RESET BUTTON=====================*/}
      <FormControl pt={5}>
        <Buttons
          type="submit"
          title="Şifreyi Değiştir"
          width="100%"
          height={35}
          background="green"
          fontweight={100}
          fontsize={12}
          borderRadius={5}
        />
      </FormControl>
    </VStack>
  );
};

export default NewPasswordForm;
