import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import Inputs from "../../../../../components/shared/Input/Inputs";

const NameInput = ({
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
        Ad
      </FormLabel>
      <InputGroup>
        <Inputs
          type="text"
          name={name}
          placeholder={
            errors[name] && touched[name] ? `${errors[name]}` : "Enter name.."
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
          <FaUser color="#000" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default NameInput;
