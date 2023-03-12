import React from "react";
import { Card, Stack, VStack } from "@chakra-ui/react";
import Inputs from "../../shared/Input/Inputs";
import Buttons from "../../shared/button/Button";
import { useFormik } from "formik";

const EditPassword = () => {
  //*-----------------Take input values------------

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <VStack as='form' onSubmit={handleSubmit}>
        {/*------------------------Change Password Container------------------ */}
        <Card
          color="#000"
          h="200px"
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          bg="#ddd"
          w='100%'
        >
          <Stack direction="column" w="80%" spacing={5}>
            {/*------------------------Change Password Inputs------------------ */}

            <Inputs
              height={8}
              type="password"
              placeholder="Yeni şifre"
              border="1px solid #777"
              fontsize={14}
              name="password"
              value={values.password}
              onchange={handleChange}
              onblur={handleBlur}
            />
            <Inputs
              height={8}
              type="password"
              placeholder="Şifre Onayi"
              border="1px solid #777"
              fontsize={14}
              name="confirmPassword"
              value={values.confirmPassword}
              onchange={handleChange}
              onblur={handleBlur}
            />

            {/*------------------------Change Password Button------------------ */}
            <Buttons
              height={8}
              title="Şifreyi Değiştir"
              fontsize={12}
              background="orange"
              color="#ddd"
              fontweight={100}
              type="submit"
            />
          </Stack>
        </Card>
      </VStack>
    </React.Fragment>
  );
};

export default EditPassword;
