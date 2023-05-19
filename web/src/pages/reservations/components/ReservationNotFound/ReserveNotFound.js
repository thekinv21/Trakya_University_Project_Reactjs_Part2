import React from "react";
import { Stack, Heading, Card, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ReserveNotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack spacing={6}>
      <Card overflow="hidden" p={5} bg="whiteAlpha.200">
        <Heading
          fontFamily="Poppins"
          fontWeight={100}
          fontSize={["16px", "16px", "18px", "20px"]}
          p={4}
        >
          Yaklaşan Rezervasyonlariniz Bulunmamaktadir
        </Heading>
        <Text fontSize="small" p={4}>
          Restoranlari Keşfederek Bonus Puanlar Kazanın
        </Text>
        <Button
          size="sm"
          width="100%"
          bg="rgb(248, 179, 51)"
          color="#fff"
          fontWeight="regular"
          fontSize="small"
          _hover={{ bg: "orange" }}
          onClick={() => navigate("/discover")}
        >
          Restoranlari Keşfet
        </Button>
      </Card>
    </Stack>
  );
};

export default ReserveNotFound;
