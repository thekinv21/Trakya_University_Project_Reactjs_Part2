import React from "react";
import { Stack, Text, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));

    navigate(token ? "/main" : "/");
  };

  return (
    <Stack
      w="100vw"
      h="100vh"
      padding="20px 0px"
      alignItems="center"
      direction="column"
      spacing={5}
    >
      <Text fontSize={["20px", "30px", "30px", "40px"]} mt={20}>
        Maalesef Bu Sayfa Bulunamadi!
      </Text>

      <Image
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Not Found GIF"
        w={{ base: "100%", md: 800 }}
        h={{ base: "100%", md: 500 }}
      />

      <Text fontSize={["20px", "30px", "30px", "30px"]}>
        Görünüşe Göre Kayboldunuz!
      </Text>

      <Text fontSize={["15px", "15px", "15px", "20px"]}>
        Aradiğiniz sayfa Mevcut Değil!
      </Text>

      <Button
        onClick={handleGoHome}
        colorScheme="green"
        w={{ base: "100%", md: 350 }}
        fontWeight={100}
        fontSize={14}
      >
        Ana Sayfaya git
      </Button>
    </Stack>
  );
};

export default NotFound;
