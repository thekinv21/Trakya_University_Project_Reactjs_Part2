import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Stack,
  Link,
} from "@chakra-ui/react";
import Inputs from "../../../../../components/shared/Input/Inputs";
import Buttons from "../../../../../components/shared/button/Button";
import {  ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PasswordInput = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  show,
  setShow,
}) => (
  <FormControl>
    <FormLabel fontWeight="400" fontSize="12px">
      Password
    </FormLabel>
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
        border={errors.password && touched.password ? "2px solid red" : "none"}
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

    <Stack w="full" pt={4} fontSize={12} color="gray.500">
      <Link display="flex" justifyContent="flex-end" href="/reset_password">
        Forgot Password ?
      </Link>
    </Stack>
  </FormControl>
);

export default PasswordInput;
