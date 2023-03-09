import React from "react";
import FormContainer from "../components/FormContainer";
import {
  Stack,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import FormControls from "../components/FormControl";
import Inputs from "../../../shared/Input/Inputs";
import Buttons from "../../../shared/button/Button";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignWith from "../components/FormSignWith";
import { useFormik } from "formik";
import signInSchema from "../validation/sign-in";

const SignInForm = () => {
  //*--------------Password show eye setups----------------
  const [show, setShow] = React.useState(false);

  //*----------------SignIn input values-------------------

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },

      onSubmit: (values, action) => {

        //todo : yapilacak işlemler gelecek
        
        console.log(values);
        
        //*------------Clear Inputs after submit------------
        action.resetForm();
      },

      validationSchema: signInSchema,
    });

  return (
    <React.Fragment>
      <FormContainer width="100%" md="450" onSubmit={handleSubmit}>
        {/*----------------- Form Title -----------------*/}

        <Stack align="center" pb={50}>
          <Heading fontSize="4xl" fontWeight="400" textAlign="center">
            Sign in to your Account
          </Heading>

          <Text fontSize="1xl" color="gray.400" align="center">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        {/*----------------- Form Inputs Username -----------------*/}

        <FormControls title="Username">
          <InputGroup>
            <Inputs
              type="text"
              name="username"
              placeholder={
                errors.username && touched.username
                  ? `${errors.username}`
                  : "Enter Username.."
              }
              background="#ddd"
              width="full"
              border={
                errors.username && touched.username ? "2px solid red" : "none"
              }
              outline="none"
              color="#000"
              fontsize={14}
              fontweight={500}
              value={values.username}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <EmailIcon color="#000" />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*----------------- Form Inputs Password-----------------*/}

        <FormControls title="Password">
          <InputGroup>
            <Inputs
              type={show ? "text" : "password"}
              name="password"
              placeholder={
                errors.password && touched.password
                  ? `${errors.password}`
                  : "Enter Password.."
              }
              background="#ddd"
              color="#000"
              border={
                errors.password && touched.password ? "2px solid red" : "none"
              }
              outline="none"
              value={values.password}
              onchange={handleChange}
              onblur={handleBlur}
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

          {/*----------------- Forgot Password-----------------*/}

          <Stack w="full" pt={4} fontSize={12} color="gray.500">
            <Link display="flex" justifyContent="flex-end">
              Forgot Password ?
            </Link>
          </Stack>
        </FormControls>

        {/*----------------- Sign In Button-----------------*/}

        <FormControls paddingTop={5}>
          <Buttons
            type="submit"
            title="Sign In"
            width="100%"
            height={35}
            background="#4462F2"
            fontweight={100}
            fontsize={14}
            borderRadius={5}
          />
        </FormControls>

        {/*----------------- Sign In with Faceb or Google-----------------*/}
        <FormControls>
          <SignWith />
        </FormControls>
      </FormContainer>
    </React.Fragment>
  );
};

export default SignInForm;
