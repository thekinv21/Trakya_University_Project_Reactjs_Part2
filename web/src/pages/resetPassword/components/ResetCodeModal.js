import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  PinInput,
  PinInputField,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const ResetCodeModal = ({ openPinModal, closePinModal }) => {
  //*================NAVİGATİON=================

  const navigation = useNavigate();

  //*===============PİN CODE VALUE===============

  const [Pin, setPin] = React.useState("");

  //*===============PİN CODE CHANGE===============

  const handlePinChange = (value) => {
    setPin(value);
  };

  //*===============PİNCODE SUMBİT===============

  const handlePinSubmit = (e) => {
    e.preventDefault();

    // TODO : Eğer pin code doğru ise Yeni şifre sayfasına yönlendir

    navigation("/new_password");
  };

  return (
    <React.Fragment>
      {/*======================MAİN MODAL====================*/}
      <Modal
        isOpen={openPinModal}
        onClose={closePinModal}
        isCentered
        size="2xl"
      >
        <ModalOverlay />

        {/*===================MODAL CONTENT==================*/}
        <ModalContent>
          {/*==================MODAL hEADER================= */}

          <ModalHeader>Reset Password</ModalHeader>

          {/*================MODAL CLOSE BUTTON==============*/}
          <ModalCloseButton />

          {/*================MODAL PİN INPUT==================*/}
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box pb={5}>
              <Text>E-mailinize Gönderdiğimiz Sifreyi giriniz</Text>
            </Box>

            <HStack>
              <PinInput value={Pin} onChange={handlePinChange}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </ModalBody>

          {/*==================?MODAL FOOTER=================*/}
          <ModalFooter alignItems="center">
            <Button
              w="100%"
              bg="green"
              _hover={{ bg: "green.500" }}
              color="#fff"
              fontWeight={100}
              fontSize={14}
              onClick={handlePinSubmit}
            >
              Confirm Pin Code
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ResetCodeModal;
