import React from "react";
import FormContainer from "../../../sign-in/components/FormContainer";
import {
  Image,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import FormControls from "../../../sign-in/components/FormControl";
import Logo from "../../../../assets/brand/Logo.svg";
import Buttons from "../../../../components/shared/button/Button";
import Inputs from "../../../../components/shared/Input/Inputs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignWith from "../../../sign-in/components/FormSignWith";
import { useFormik } from "formik";

const ResetForm = () => {

  //*--------------Password show when click eye----------------

  const [show, setShow] = React.useState(false);

  //*----------------ResetPassword input values-------------------

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },

      onSubmit: (values, action) => {
        console.log(values);
      },
    });

  return (
    <React.Fragment>
      {/*-----------------Reset Form Container -----------------*/}

      <FormContainer position='start' width="100%" md={400} onSubmit={handleSubmit}>
        {/*-----------------Reset Form Title -----------------*/}

        <Link href="/">
          <Image src={Logo} />
        </Link>

        {/*----------------- Input NewPassword-----------------*/}

        <FormControls title="New Password">
          <Inputs
            type="password"
            name="password"
            placeholder={
              errors.password && touched.password
                ? `${errors.password}`
                : "Yeni Şifre.."
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
        </FormControls>

        {/*----------------- Input ConfirmPassword-----------------*/}

        <FormControls title="Confirm Password">
          <InputGroup>
            <Inputs
              type={show ? "text" : "password"}
              name="confirmPassword"
              placeholder={
                errors.password && touched.password
                  ? `${errors.password}`
                  : "Yeni Şifre Onayi.."
              }
              background="#ddd"
              color="#000"
              border={
                errors.confirmPassword && touched.confirmPassword
                  ? "2px solid red"
                  : "none"
              }
              outline="none"
              value={values.confirmPassword}
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
        </FormControls>

        {/*----------------- Reset Button-----------------*/}

        <FormControls paddingTop={5}>
          <Buttons
            type="submit"
            title="Reset Password"
            width="100%"
            height={35}
            background="#4462F2"
            fontweight={100}
            fontsize={14}
            borderRadius={5}
          />
        </FormControls>

        {/*----------------- Reset with Faceb or Google-----------------*/}
        <FormControls>
          <SignWith />
        </FormControls>
      </FormContainer>
    </React.Fragment>
  );
};

export default ResetForm;
