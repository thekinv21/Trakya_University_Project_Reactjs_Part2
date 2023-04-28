import React from "react";
import {
  Stack,
  Heading,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotfoundFavorite = () => {
  //*================NAVİGATİON SETUP================

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/*=========================FAVORİ CARD CONTAİNER=======================*/}

      <Stack spacing={6}>
        {/*=====================FAVORİ NOTFOUND CARD==================*/}

        <Card bg="#fff" overflow="hidden">
          {/*==================FAVORİ NOTFOUND TİTLE==================*/}

          <CardHeader>
            <Heading
              fontFamily="Poppins"
              fontWeight={100}
              fontSize={["16px", "16px", "18px", "20px"]}
            >
              Herhangi Bir Favori Restoraniniz Bulunmamaktadir
            </Heading>
          </CardHeader>

          {/*================RESERVE NOTFOUND SUBTİTLE=================*/}

          <CardBody fontSize="small">
            <Text>
              {" "}
              Restoranlari Keşfederek Favori Restoran Haline Getirebilirsiniz
            </Text>
          </CardBody>

          {/*===================RESERVE NOTFOUND BUTTON================*/}
          <CardFooter>
            <Button
              size="md"
              width="100%"
              bg="green"
              color="#fff"
              fontWeight={100}
              fontSize="small"
              _hover={{ bg: "green.500" }}
              onClick={() => navigate("/discover")}
            >
              Restoranlari Keşfet ve Favorilini Bul
            </Button>
          </CardFooter>
        </Card>
      </Stack>
    </React.Fragment>
  );
};

export default NotfoundFavorite;
