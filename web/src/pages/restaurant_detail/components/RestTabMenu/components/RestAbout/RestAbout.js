import { Box, Stack, Text, Icon, Divider } from "@chakra-ui/react";
import React from "react";
import { FcCallback, FcHome, FcInfo } from "react-icons/fc";
import Maps from "../../../../../../components/map/Map";
import RestPoints from "../RestPoints/RestPoints";

const RestAbout = ({ restaurantInfo }) => {
  const Title = ({ icon, title }) => {
    return (
      <Stack direction="row" alignItems="center">
        <Icon fontSize={22} as={icon} />
        <Text fontSize={14}>{title}</Text>
      </Stack>
    );
  };

  return (
    <>
      <Stack spacing={5} maxW="100%" pt={10}>
        <Box>
          <Text fontWeight={300} fontSize={20}>
            Restaurant Hakkında
          </Text>
          <Divider
            orientation="horizontal"
            borderColor="rgba(0,0,0,0.3)"
            py={3}
          />
        </Box>

        <Box>
          <Stack>
            <Title
              icon={FcHome}
              title={
                restaurantInfo.restaurantName
                  ? restaurantInfo.restaurantName
                  : "Yok"
              }
            />

            <Title
              icon={FcCallback}
              title={restaurantInfo.phone ? restaurantInfo.phone : "Yok"}
            />

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

        <Stack>
          <Maps width="100%" height={250} restaurantInfo={restaurantInfo} />
        </Stack>

        <RestPoints />
      </Stack>
    </>
  );
};

export default RestAbout;
