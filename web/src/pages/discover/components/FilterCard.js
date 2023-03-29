import React from "react";
import {
  Stack,
  Link,
  Image,
  Heading,
  Text,
  CheckboxGroup,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Box,
} from "@chakra-ui/react";
import Map from "../../../assets/images/MAP.png";
import { FaHandPointUp } from "react-icons/fa";

const FilterCard = () => {
  return (
    <React.Fragment>
      <Stack
        direction="column"
        spacing={5}
        display={["none", "none", "none", "block"]}
        maxW={300}
      >
        {/*==================MAP PNG================ */}

        <Link href="https://www.google.com/maps">
          <Image
            src={Map}
            borderRadius={10}
            cursor="pointer"
            objectFit="cover"
          />
        </Link>

        {/*=================FİLTER CARD================== */}
        <Stack
          bg="#fff"
          boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
          borderRadius={10}
          p={5}
        >
          {/*=================FİLTER CARD SUBTİTLE============*/}

          <Heading fontSize={16} fontWeight={500}>
            ARAMA KRİTERLERİ
          </Heading>

          <Text
            w={["100%", "100%", "100%", "50%"]}
            fontSize={10}
            bg="rgb(248, 179, 51)"
            color="#fff"
            size="xs"
            textAlign="center"
            borderRadius={5}
          >
            Online Rezervasyonalar
          </Text>

          <hr />

          {/*==================FİLTER CARD category================ */}

          <Heading fontSize={14} fontWeight={400} py={3}>
            MUTFAKTA MEVCUT OLANLAR
          </Heading>

          <CheckboxGroup colorScheme="green" fontSize="small">
            <Stack
              mt={5}
              spacing={[1, 4]}
              direction="column"
              borderColor="rgba(0,0,0,0.3)"
            >
              <Checkbox borderColor="rgba(0,0,0,0.3)" value="ciger">
                Ciger
              </Checkbox>
              <Checkbox borderColor="rgba(0,0,0,0.3)" value="kebap">
                Kebap
              </Checkbox>
              <Checkbox borderColor="rgba(0,0,0,0.3)" value="alkollu">
                Alkollü
              </Checkbox>
              <Checkbox borderColor="rgba(0,0,0,0.3)" value="icecek">
                İçecek
              </Checkbox>
              <Checkbox borderColor="rgba(0,0,0,0.3)" value="pizza">
                Pizza
              </Checkbox>
            </Stack>
          </CheckboxGroup>

          {/*==================FİLTER CARD PUANLAMA================ */}

          <hr />

          <Stack py={3} direction="column" spacing={3}>
            <Heading fontSize={14} fontWeight={500} pb={3}>
              DEĞERLENDİRME
            </Heading>

            {/*==================FİLTER CARD PUANLA SLİDER================ */}

            <Stack
              direction="row"
              justifyContent="space-between"
              color="orange"
            >
              <Text fontSize="small">1</Text>
              <Text fontSize="small">2</Text>
              <Text fontSize="small">3</Text>
              <Text fontSize="small">4</Text>
              <Text fontSize="small">5</Text>
            </Stack>

            <Slider defaultValue={1} min={1} max={5} step={1}>
              <SliderTrack bg="rgba(0,0,0,0.2)">
                <Stack position="relative" right={10} />
                <SliderFilledTrack bg="orange" />
              </SliderTrack>
              <SliderThumb>
                <Box color="orange" as={FaHandPointUp} />
              </SliderThumb>
            </Slider>

            {/*================FİLTER CARD PUANLAMA BUTTON=============*/}

            <Stack pt={3}>
              <Button
                bg="orange.300"
                color="#fff"
                size="sm"
                fontSize={12}
                fontWeight={200}
                _hover={{ bg: "orange.300" }}
              >
                Değerlendir
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default FilterCard;
