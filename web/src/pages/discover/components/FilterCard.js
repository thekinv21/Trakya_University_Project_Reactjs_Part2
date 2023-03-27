import React from "react";
import {
  Stack,
  Link,
  Image,
  Heading,
  Text,
  CheckboxGroup,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import Map from "../../../assets/images/MAP.png";

const FilterCard = () => {
  return (
    <React.Fragment>
      <Stack
        direction="column"
        spacing={5}
        display={["none", "none", "block", "block"]}
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

          {/*==================FİLTER CARD category================ */}

          <Heading fontSize={14} fontWeight={400} py={5}>
            MUTFAKTA MEVCUT OLANLAR
          </Heading>

          <CheckboxGroup colorScheme="green" fontSize="small">
            <Stack mt={5} spacing={[1, 4]} direction="column">
              <Checkbox value="ciger">Ciger</Checkbox>
              <Checkbox value="kebap">Kebap</Checkbox>
              <Checkbox value="alkollu">Alkollü</Checkbox>
              <Checkbox value="icecek">İçecek</Checkbox>
              <Checkbox value="pizza">Pizza</Checkbox>
            </Stack>
          </CheckboxGroup>

          {/*==================FİLTER CARD PUANLAMA================ */}

          <Stack py={3}>
            <Button
              bg="orange.300"
              color="#fff"
              size="sm"
              fontSize={12}
              fontWeight={200}
              _hover={{ bg: "orange.300" }}
            >
              Category Ara
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default FilterCard;
