import React from "react";
import {
  Image,
  InputGroup,
  InputLeftAddon,
  Input,
  VStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../../assets/brand/Logo.svg";
import { FaEnvelope } from "react-icons/fa";
import FormControls from "../../sign-in/components/FormControl";
import ResetCodeModal from "./ResetCodeModal";
import { toast, ToastContainer } from "react-toastify";

const ResetForm = () => {
  //?=====================EMAİL VALUE========================
  const [email, setEmail] = React.useState("");

  //?=================== EMAİL PIN MODAL SETUPS================
  const { isOpen, onOpen, onClose } = useDisclosure();

  //?=====================BUTTON HANDLECLİCK===================

  const handleClick = (e) => {
    e.preventDefault();

    //*==================EMAİL REGEXS==============
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    //*=================EĞER EMAİL İSE=============
    if (regEx.test(email)) {
      onOpen();
    }
    //*==================EĞER EMAİL DEĞLSE==========
    else {
      return toast.error("E-mail Boş Olamaz!", {
        position: "top-right",
        autoClose: 1600,
      });
    }

    //*=================INPUTU TEMİZLE==============

    setEmail("");
  };

  return (
    <React.Fragment>
      <VStack
        as="form"
        bg="blackAlpha.100"
        borderRadius={10}
        padding={10}
        spacing={5}
      >
        {/*=====================BRAND LOGO====================== */}

        <FormControls>
          <Image
            h={400}
            w={500}
            src={Logo}
            draggable="false"
            cursor="pointer"
          />
        </FormControls>
        {/*=====================SEND INPUT EMAİL====================== */}

        <FormControls title="E-mail adresi">
          <InputGroup>
            <InputLeftAddon width="3.5rem">
              <FaEnvelope color="#000" />
            </InputLeftAddon>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="#fff"
              color="#000"
              outline="none"
              placeholder="Enter E-mail"
              _placeholder={{ fontSize: "14px" }}
            />
          </InputGroup>
        </FormControls>

        {/*=====================SEND BUTTON====================== */}
        <Button
          w="100%"
          bg='green'
          _hover={{bg : 'green.600'}}
          fontWeight={100}
          fontSize={14}
          onClick={handleClick}
        >
          Send Email
        </Button>

        {/*===================== EMAİL PIN MODAL===================== */}

        <ResetCodeModal openPinModal={isOpen} closePinModal={onClose} />
      </VStack>

      {/*=====================ALERT CONTAİNER===================== */}

      <ToastContainer />
    </React.Fragment>
  );
};

export default ResetForm;
