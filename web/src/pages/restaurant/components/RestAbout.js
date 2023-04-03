import { Box, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdRestaurant } from "react-icons/md";
import Maps from "../../../components/map/Map";
import RestPuan from "./RestPuan";

const RestAbout = ({ restaurantInfo }) => {
  //?=================TİTLE COMPONENT==================

  const Title = ({ icon, title }) => {
    return (
      <Stack direction="row" alignItems="center">
        <Icon fontSize={18} as={icon} />
        <Text fontSize={14}>{title}</Text>
      </Stack>
    );
  };

  return (
    <React.Fragment>
      <Stack spacing={5} maxW="100%" p={5}>
        {/*======================RESTAURANT HAKKINDA================== */}
        <Box>
          <Text fontWeight={300} fontSize={20}>
            Restaurant Hakkinda
          </Text>
          <Divider
            orientation="horizontal"
            borderColor="rgba(0,0,0,0.3)"
            py={3}
          />
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
        <Stack>
          <Maps width="100%" height={150} restaurantInfo={restaurantInfo} />
        </Stack>

        {/*=====================RESTaurant PUANLAR================== */}
        <RestPuan />
      </Stack>
    </React.Fragment>
  );
};

export default RestAbout;
