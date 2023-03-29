import { Box, Stack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdRestaurant } from "react-icons/md";
import Maps from "../../../components/map/Map";

const RestAbout = ({ restaurantInfo }) => {
  //?=================TİTLE COMPONENT==================

  const Title = ({ icon, title }) => {
    return (
      <Stack direction="row" alignItems="center">
        <Icon fontSize={20} as={icon} />
        <Text fontSize="small">{title}</Text>
      </Stack>
    );
  };

  return (
    <React.Fragment>
      <Stack
        spacing={5}
        width={650}
        maxW="100%"
        bg="blackAlpha.300"
        borderRadius={10}
        p={5}
      >
        {/*======================RESTAURANT HAKKINDA================== */}
        <Box>
          <Text fontWeight={300} fontSize={20}>
            Restaurant Hakkinda
          </Text>
        </Box>

        {/*======================RESTAURANT INFORNATİON================== */}

        <Box>
          <Stack>
            {/*========================RESTAURANT TİTLE=================== */}

            <Title icon={MdRestaurant} title={restaurantInfo.restaurantName} />

            {/*=====================RESTAURANT TEL NUMBER================ */}

            <Title icon={FaPhone} title={restaurantInfo.phone} />

            {/*=====================RESTAURANT ADDRESSS==================*/}
            <Title
              icon={HiLocationMarker}
              title={restaurantInfo.detailedAddress}
            />
          </Stack>
        </Box>

        {/*=====================LOCATION ON GOOGLE MAPS===================*/}
        <Stack py={5}>
          <Maps width="100%" height={150} restaurantInfo={restaurantInfo} />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default RestAbout;
