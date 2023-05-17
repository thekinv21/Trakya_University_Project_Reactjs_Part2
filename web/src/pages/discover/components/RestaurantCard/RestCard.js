import { Card, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RestCard = ({ res }) => {
  //*==============NAVİGATİON SETUP============
  const navigate = useNavigate();

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg="whiteAlpha.200"
      mb={5}
      cursor="pointer"
      onClick={() => navigate(`/restaurant/${res.id}`)}
    >
      {/*=======================RESTAURANT IMAGE======================= */}
      <Stack maxW="100%" w="300px" h={200}>
        <Image
          objectFit="cover"
          w="100%"
          h="100%"
          src={res.restaurantImage}
          alt={res.restaurantName}
          draggable={false}
        />
      </Stack>
      {/*=======================RESTAURANT INFO======================= */}
      <Stack w="100%">
        <Stack p={5}>
          <Stack spacing={2}>
            {/*=======================RESTAURANT NAME======================= */}
            <Text fontSize={20}>{res.restaurantName}</Text>
            {/*=======================RESTAURANT PHONE======================*/}
            <Text fontSize={12}>Phone : {res.phone ? res.phone : "Yok"}</Text>,
            {/*=====================RESTAURANT LOCATİON======================*/}
            <Text fontSize={12}>Location : {res.city}</Text>
            {/*=====================RESTAURANT DİSCTRİCT=====================*/}
            <Text fontSize={12}>District : {res.district}</Text>
            {/*=======================RESTAURANT WORKİNG======================= */}
            <Text fontSize={12}>
              Work : {res.openingTime} &#8741; {res.closingTime}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default RestCard;
