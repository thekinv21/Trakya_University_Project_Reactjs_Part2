import { Box, Stack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdRestaurant } from "react-icons/md";
import Maps from "../../../components/map/Map";

const RestAbout = ({ restaurantInfo }) => {
  //?------------------Title component---------------
  const Title = ({ icon, title }) => {
    return (
      <Stack direction="row" alignItems="center">
        <Icon fontSize={20} as={icon} />
        <Text>{title}</Text>
      </Stack>
    );
  };
  return (
    <React.Fragment>
      <Box
        minW={["100%", "100%", "80%", "60%"]}
        display="flex"
        flexDirection="column"
        gap={5}
        mb={50}
      >
        {/*-------------------------Restaurant About-------------------- */}
        <Box>
          <Text fontWeight={300} fontSize="2xl">
            Restaurant Hakkinda
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={5}
        >
          <Stack
            direction={["column", "column", "column", "row"]}
            justifyContent="space-between"
          >
            {/*-------------------Restaurant Name-------------------- */}
            <Title icon={MdRestaurant} title={restaurantInfo.restaurantName} />

            {/*----------------Restaurant Tel Number-------------------- */}
            <Title icon={FaPhone} title={restaurantInfo.phone} />

            {/*----------------Restaurant Address-------------------- */}
            <Title
              icon={HiLocationMarker}
              title={restaurantInfo.detailedAddress}
            />
          </Stack>

          {/*--------------------Location on GoogleMaps-------------------- */}

          <Stack pt={2}>
            <Maps width="100%" height={150} restaurantInfo={restaurantInfo} />
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default RestAbout;
