import React from "react";
import FormContainer from "./../components/FormContainer";
import {
  Heading,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import FormControls from "./../components/FormControl";
import Inputs from "./../../../shared/Input/Inputs";
import Buttons from "./../../../shared/button/Button";
import { FaUser, FaPhone } from "react-icons/fa";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignWith from "./../components/FormSignWith";
import { useFormik } from "formik";
import signUpSchema from "../validation/sign-up";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../../redux/AuthSlicer";
import { useRegister } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  //?-------------Show Passsword when Click eye-------------

  const [show, setShow] = React.useState(false);
  const { mutate: register } = useRegister()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //? -----------------Submiting Input values----------------

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        mail: "",
        password: "",
        username: "",
      },

      onSubmit: async (values, action) => {
        new Promise((resolve, reject) => {
          register(values, {
            //data.content olacak sonradan
            onSuccess: () => {
              resolve(undefined)
              console.log('başarılı')
              navigate('/signin')
              action.resetForm();
            },
            onError: () => {
              reject()
              console.log('başarısız');
            }
          })
        })
        console.log(values);

        //?----------Clear inputs after submit---------
        action.resetForm();
      },

      //?--------------Sign-up validations-------------
      validationSchema: signUpSchema,
    });

  return (
    <React.Fragment>
      <FormContainer width="100%" md="450" onSubmit={handleSubmit}>
        {/*----------------------Title-------------------------*/}
        <Heading
          w="100%"
          fontSize={["5xl", "7xl", "7xl", "7xl"]}
          fontFamily="VALORANT"
          textAlign="center"
          mb="10px"
        >
          REZZTORAN
        </Heading>

        {/*----------------------SubTitle-------------------------*/}

        <Stack w="full" align="start" pb={5}>
          <Text fontSize="2xl">Sign Up</Text>

          <Text fontSize="12px" color="gray.400">
            Create a new account...
          </Text>
        </Stack>

        {/*----------------------InputS name-------------------------*/}

        <FormControls title="Ad" paddingTop={4}>
          <InputGroup>
            <Inputs
              type="text"
              name="name"
              placeholder={
                errors.name && touched.name
                  ? `${errors.name}`
                  : "Enter name.."
              }
              background="#ddd"
              color="#000"
              border={
                errors.name && touched.name ? "2px solid red" : "none"
              }
              outline="none"
              fontsize={14}
              value={values.name}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <FaUser color="#000" />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*----------------------InputS surname-------------------------*/}

        <FormControls title="Soyad" paddingTop={4}>
          <InputGroup>
            <Inputs
              type="text"
              name="surname"
              placeholder={
                errors.surname && touched.surname
                  ? `${errors.surname}`
                  : "Enter surname.."
              }
              background="#ddd"
              color="#000"
              border={
                errors.surname && touched.surname ? "2px solid red" : "none"
              }
              outline="none"
              fontsize={14}
              value={values.surname}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <FaUser color="#000" />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*----------------------InputS E-mail-------------------------*/}

        <FormControls title="E-mail adresi" paddingTop={4}>
          <InputGroup>
            <Inputs
              type="e-mail"
              name="mail"
              placeholder={
                errors.mail && touched.mail
                  ? `${errors.mail}`
                  : "Enter E-mail.."
              }
              background="#ddd"
              color="#000"
              border={errors.mail && touched.mail ? "2px solid red" : "none"}
              outline="none"
              fontsize={14}
              value={values.mail}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <EmailIcon color="#000" />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*----------------------InputS Phone number-------------------------*/}

        <FormControls title="Kullanıcı Adı" paddingTop={4}>
          <InputGroup>
            <Inputs
              type="tel"
              name="username"
              placeholder={
                errors.username && touched.username
                  ? `${errors.username}`
                  : "Enter Phone number"
              }
              background="#ddd"
              color="#000"
              border={
                errors.username && touched.username
                  ? "2px solid red"
                  : "none"
              }
              outline="none"
              fontsize={14}
              value={values.username}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <FaUser color="#000" />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*----------------------InputS Password-------------------------*/}

        <FormControls title="Password" paddingTop={4}>
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
              fontsize={14}
              value={values.password}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <InputRightElement width="4.5rem">
              <Buttons
                title={show ? <ViewOffIcon /> : <ViewIcon />}
                color="#000"
                height="1.5rem"
                size={18}
                background="none"
                onclick={() => setShow(!show)}
              />
            </InputRightElement>
          </InputGroup>
        </FormControls>

        {/*--------------------Account Create Button-----------------------*/}

        <FormControls paddingTop={10}>
          <Buttons
            title="Create Account"
            width="full"
            background="#4462F2"
            fontweight={400}
            fontsize={14}
            borderRadius={5}
            type="submit"
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

export default SignUpForm;
