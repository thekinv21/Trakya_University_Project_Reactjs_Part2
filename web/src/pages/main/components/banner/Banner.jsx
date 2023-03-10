import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import BannerBackground from "../../../../assets/images/banner.jpg";
import Buttons from "../../../../components/shared/button/Button";

const Banner = () => {
  return (
    <React.Fragment>
      <Stack maxW="100vw" h="80vh">
        {/*----------------------------------Banner Container------------------*/}
        <Stack
          display="table"
          w="100%"
          h="100%"
          bgImage={BannerBackground}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          {/*--------------------Banner bg üsütnde karanlık oluşuturur---------------*/}

          <Stack w="100%" h="100%" bg="rgba(0,0,0,0.6)">
            <Stack alignItems="center" justifyContent="center" h="100%">
              {/*--------------------Banner title ------------------*/}
              <Heading
                fontFamily="cursive"
                fontSize={["3em", "5em", "6em", "10em"]}
                fontWeight="700"
                mb={10}
                color="#ddd"
              >
                Rezztoran
              </Heading>

              {/*--------------------Banner subtitle ------------------*/}
              <Text
                fontSize={["16px", "16px", "18px", "28px"]}
                fontWeight="300"
                color="#fff"
                pb={10}
              >
                Bizimle Kolay
              </Text>

              {/*--------------------Banner discover button ------------------*/}

              <Buttons
                title=" Restoranlari Bizimle Keşfedin"
                background="green"
                fontweight="regular"
                fontsize={["12px", "12px", "14px", "14"]}
                color="#ddd"
                width={["200px", "200px", "230px", "370px"]}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Banner;
