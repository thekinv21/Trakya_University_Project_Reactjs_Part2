import { Box, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import React from "react";
import { FcCallback, FcHome, FcInfo } from "react-icons/fc";
import Maps from "../../../../../../components/map/Map";
import RestPoints from "../RestPoints/RestPoints";

const RestAbout = ({ restaurantInfo }) => {
  //?=================TİTLE COMPONENT==================

  const Title = ({ icon, title }) => {
    return (
      <Stack direction="row" alignItems="center">
        <Icon fontSize={22} as={icon} />
        <Text fontSize={14}>{title}</Text>
      </Stack>
    );
  };

  return (
    <React.Fragment>
      <Stack spacing={5} maxW="100%" pt={10}>
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

            <Title
              icon={FcHome}
              title={
                restaurantInfo.restaurantName
                  ? restaurantInfo.restaurantName
                  : "Yok"
              }
            />

            {/*=====================RESTAURANT TEL NUMBER================ */}

            <Title
              icon={FcCallback}
              title={restaurantInfo.phone ? restaurantInfo.phone : "Yok"}
            />

            {/*=====================RESTAURANT ADDRESSS==================*/}
            <Title
              icon={FcInfo}
              title={
                restaurantInfo.detailedAddress
                  ? restaurantInfo.detailedAddress
                  : "Yok"
              }
            />
          </Stack>
        </Box>

        {/*=====================LOCATION ON GOOGLE MAPS===================*/}
        <Stack>
          <Maps width="100%" height={150} restaurantInfo={restaurantInfo} />
        </Stack>

        {/*=====================RESTaurant PUANLAR================== */}
        <RestPoints />
      </Stack>
    </React.Fragment>
  );
};

export default RestAbout;
