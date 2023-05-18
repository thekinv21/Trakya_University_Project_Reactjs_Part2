import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Inputs from "../../../../../components/shared/Input/Inputs";

const UsernameInput = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}) => (
  <FormControl>
    <FormLabel fontWeight="400" fontSize="12px">
      Username
    </FormLabel>
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
        border={errors.username && touched.username ? "2px solid red" : "none"}
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
  </FormControl>
);

export default UsernameInput;
