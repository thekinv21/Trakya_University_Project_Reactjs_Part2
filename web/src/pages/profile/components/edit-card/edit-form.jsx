import React from "react";
import {
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  VStack,
} from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";
import Inputs from "../../../../components/shared/Input/Inputs";
import Buttons from "../../../../components/shared/button/Button";
import { useFormik } from "formik";

const EditForm = () => {
  //*-------------------Form values--------------------

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      user_photo: "",
      firstname: "",
      lastname: "",
      email: "",
      phone_number: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      {/*------------------------User Image Input and Email Container--------------0 */}

      <VStack as="form" onSubmit={handleSubmit}>
        <Stack w="full" textAlign="start">
          <FormControl
            w="72px"
            h="72px"
            bg="gray.300"
            borderRadius="50%"
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#fff"
          >
            {/*------------------------User CameraIcon--------------*/}

            <FormLabel htmlFor="add_image" m={0}>
              <MdAddAPhoto cursor="pointer" color="#777" fontSize={22} />
            </FormLabel>

            {/*------------------------User Image Input--------------*/}

            <Stack display="none">
              <Inputs
                name="user_photo"
                value={values.user_photo}
                onchange={handleChange}
                onblur={handleBlur}
                type="file"
                id="add_image"
              />
            </Stack>
          </FormControl>

          {/*------------------------E-posta Adresi-------------- */}

          <FormControl>
            <FormHelperText fontSize={10}>E-posta Adresi...</FormHelperText>

            <Text fontSize={12} mt={2}>
              vadimkiniabaev@gmail.com
            </Text>
          </FormControl>
        </Stack>

        {/*---------------------Name ve Username Input---------------*/}

        <Stack w="full" direction="row" spacing={8} pt={5}>
          <Inputs
            name="firstname"
            placeholder="Name"
            border="1px solid #777"
            fontsize={14}
            value={values.firstname}
            onchange={handleChange}
            onblur={handleBlur}
          />
          <Inputs
            name="lastname"
            placeholder="Surname"
            border="1px solid #777"
            fontsize={14}
            value={values.lastname}
            onchange={handleChange}
            onblur={handleBlur}
          />
        </Stack>

        {/*---------------------Telephone Input---------------------*/}

        <Stack w="full" pt={8}>
          <InputGroup>
            <InputLeftAddon
              border="1px solid #777"
              fontSize={14}
              bg="transparent"
              children="+905"
            />
            <Input
              name="phone_number"
              placeholder="Phone number"
              fontSize={14}
              _placeholder={{ fontSize: "12px" }}
              border="1px solid #777"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
        </Stack>

        {/*---------------------Email Input---------------------*/}

        <Stack w="full" pt={8}>
          <Inputs
            name="email"
            type="email"
            fontsize={14}
            placeholder="Enter E-mail"
            border="1px solid #777"
            value={values.email}
            onchange={handleChange}
            onblur={handleBlur}
          />
        </Stack>

        {/*---------------------Confirm Button---------------------*/}

        <Stack w="full" pt={8}>
          <Buttons
            title="Değişikleri Kaydet"
            fontsize={12}
            fontweight={100}
            background="orange"
            color="#ddd"
            type="submit"
          />
        </Stack>
      </VStack>
    </React.Fragment>
  );
};

export default EditForm;
