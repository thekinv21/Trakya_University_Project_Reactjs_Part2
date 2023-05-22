import {
  VStack,
  FormControl,
  Image,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import Logo from "../../../../assets/brand/Logo.svg";
import { FaEnvelope } from "react-icons/fa";
import { usePasswordReset } from "./usePasswordReset";

const PasswordReset = () => {
  const { handleClick, handleChange, email } = usePasswordReset();

  return (
    <VStack bg="blackAlpha.100" borderRadius={10} padding={10} spacing={5}>
      {/*=====================BRAND LOGO====================== */}

      <FormControl>
        <Image h={400} w={500} src={Logo} draggable="false" cursor="pointer" />
      </FormControl>
      {/*=====================SEND INPUT EMAİL==================*/}

      <FormControl>
        <FormLabel fontSize={13}>E-mail address</FormLabel>
        <InputGroup>
          <InputLeftAddon width="3rem">
            <FaEnvelope color="#000" />
          </InputLeftAddon>
          <Input
            type="email"
            value={email}
            onChange={handleChange}
            bg="#fff"
            color="#000"
            outline="none"
            fontSize={14}
            autoComplete="off"
            placeholder="E-mailinizi giriniz"
            _placeholder={{ fontSize: "13px" }}
          />
        </InputGroup>
      </FormControl>

      {/*=====================SEND BUTTON=========================*/}
      <Button
        size="sm"
        w="100%"
        bg="green"
        _hover={{ bg: "green.600" }}
        fontWeight={100}
        fontSize={12}
        onClick={handleClick}
      >
        Email Gönder
      </Button>
    </VStack>
  );
};

export default PasswordReset;
