import React from "react";
import { Card, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../../store/reserved/reserved.restaurant.slice";
const ReserveCard = ({
  reserveId,
  restaurantImage,
  restaurantName,
  restaurantAddress,
  reservedDate,
  reservedTime,
  reservedPeoples,
  reservedPeopleComment,
}) => {
  //*==============USING REDUX FUNCT=================

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/*=====================CARD CONTAİNER======================*/}

      <Card
        direction={["column", "column", "column", "row", "row"]}
        overflow="hidden"
        w="100%"
      >
        {/*=======================RESTAU IMAGE=================== */}

        <Image
          objectFit="cover"
          maxW={["100%", "100%", "100%", "280px"]}
          src={restaurantImage}
          alt={restaurantName}
          draggable={false}
        />

        {/*=====================RESERVE INFO======================*/}
        <Stack w="100%" p={5}>
          <Stack w="100%">
            {/*================RESERVE REST TİTLE================?*/}

            <Heading fontSize={20}>{restaurantName}</Heading>

            {/*================RESERVE REST ID====================*/}
            <Text fontSize={12}>ReserveId : {reserveId}</Text>

            {/*================RESERVE REST DATE==================*/}

            <Text fontSize={12}>Rezerve Tarihi : {reservedDate}</Text>

            {/*================RESERVE REST TIME==================*/}

            <Text fontSize={12}>Rezerve Saati : {reservedTime}</Text>

            {/*================RESERVE REST ADDRESS================*/}

            <Text fontSize={12}>Address : {restaurantAddress}</Text>

            {/*===============RESERVE PEOPLE COMMENT===============*/}

            <Text fontSize={12}>Rezerve Yeri : {reservedPeopleComment}</Text>

            {/*================RESERVE PEOPLES LENGTH==============*/}

            <Text fontSize={12}>Rezerve Kişi Sayisi : {reservedPeoples}</Text>

            {/*===============RESERVE CHANGE AND DELETE=============*/}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={["center", "center", "center", "flex-start"]}
              gap={5}
              pt={5}
            >
              {/*================RESERVE CHANGE BUTTON===============*/}
              <Button
                w={["100%", "100%", "120px", "100px"]}
                colorScheme="green"
                fontSize="small"
                fontWeight={200}
                size="sm"
              >
                Düzenle
              </Button>

              {/*================RESERVE DELETE BUTTON================ */}
              <Button
                w={["100%", "100%", "120px", "100px"]}
                colorScheme="red"
                fontSize="small"
                fontWeight={200}
                size="sm"
                onClick={() => dispatch(deleteReservation(reserveId))}
              >
                İptal Et
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </React.Fragment>
  );
};

export default ReserveCard;
