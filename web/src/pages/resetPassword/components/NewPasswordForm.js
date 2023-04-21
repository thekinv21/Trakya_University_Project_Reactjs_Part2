import React from "react";
import LoginContainer from "../../../components/container/LoginContainer";
import {
  Image,
  InputGroup,
  InputRightElement,
  VStack,
  Box,
} from "@chakra-ui/react";
import FormControls from "../../sign-in/components/FormControl";
import Logo from "../../../assets/brand/Logo.svg";
import Buttons from "../../../components/shared/button/Button";
import Inputs from "../../../components/shared/Input/Inputs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

const NewPasswordForm = () => {

  //*=================NAVİGATİON SETUP====================

  const navigation = useNavigate();

  //*===============SHOW PASSWORD VALUES====================

  const [show, setShow] = React.useState(false);

  //*=================NEW PASSWORD INPUT VALUES===============

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values, action) => {

      // TODO : Eğer şifre başarili değiştirldi ise giriş sayfasına yönlendir

      navigation('/signin')


      //*===============INPUTU TEMİZLE=================
      action.resetForm();
    },
  });

  return (
    <React.Fragment>
      <LoginContainer>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/*================FORM CONTAİNER================*/}

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
          >
            {/*===================BRAND LOGO==================*/}

            <Image
              h={400}
              w={500}
              src={Logo}
              draggable="false"
              cursor="pointer"
            />

            {/*=================INPUT NEW PASSWORD=============*/}

            <FormControls title="New Password">
              <Inputs
                name="password"
                background="#ddd"
                placeholder="Yeni Şifre"
                color="#000"
                border="none"
                outline="none"
                value={values.password}
                onchange={handleChange}
              />
            </FormControls>

            {/*============INPUT CONFİRM NEWPASSWORD==============*/}

            <FormControls title="Confirm Password">
              <InputGroup>
                <Inputs
                  type={show ? "text" : "password"}
                  name="confirmPassword"
                  background="#ddd"
                  placeholder="Yeni Şifreyi Onayla"
                  color="#000"
                  outline="none"
                  value={values.confirmPassword}
                  onchange={handleChange}
                />

                <InputRightElement width="4.5rem">
                  <Buttons
                    title={show ? <ViewOffIcon /> : <ViewIcon />}
                    color="#000"
                    height="1.5rem"
                    background="none"
                    size="18px"
                    onclick={() => setShow(!show)}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControls>

            {/*====================RESET BUTTON=====================*/}

            <FormControls paddingTop={5}>
              <Buttons
                type="submit"
                title="Reset Password"
                width="100%"
                height={35}
                background="green"
                fontweight={100}
                fontsize={14}
                borderRadius={5}
              />
            </FormControls>
          </VStack>
        </Box>
      </LoginContainer>
    </React.Fragment>
  );
};

export default NewPasswordForm;
