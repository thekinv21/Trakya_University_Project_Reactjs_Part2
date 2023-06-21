import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import Inputs from "./../../../../../components/shared/Input/Inputs";

const EmailInput = ({
  name,
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}) => {
  return (
    <FormControl pt={4}>
      <FormLabel fontWeight="400" fontSize="12px">
        E-mail adresi
      </FormLabel>
      <InputGroup>
        <Inputs
          type="email"
          name={name}
          placeholder={
            errors[name] && touched[name] ? `${errors[name]}` : "Enter E-mail.."
          }
          background="#ddd"
          color="#000"
          border={errors[name] && touched[name] ? "2px solid red" : "none"}
          outline="none"
          fontsize={14}
          value={values[name]}
          onchange={handleChange}
          onblur={handleBlur}
        />
        <InputRightElement width="4.5rem">
          <EmailIcon color="#000" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default EmailInput;
