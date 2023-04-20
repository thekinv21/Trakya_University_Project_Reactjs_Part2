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

const ReserveNotFound = () => {

  //*================NAVİGATİON SETUP================
  
  const navigate = useNavigate()


  return (
    <React.Fragment>
      {/*=========================CARD CONTAİNER=======================*/}

      <Stack spacing={6}>
        {/*=====================RESERVE NOTFOUND CARD==================*/}

        <Card bg="#fff" overflow="hidden">
          {/*==================RESERVE NOTFOUND TİTLE==================*/}

          <CardHeader>
            <Heading
              fontFamily="Poppins"
              fontWeight={100}
              fontSize={["16px", "16px", "18px", "20px"]}
            >
              Yaklaşan Rezervasyonlariniz Bulunmamaktadir
            </Heading>
          </CardHeader>

          {/*================RESERVE NOTFOUND SUBTİTLE=================*/}

          <CardBody fontSize="small">
            <Text> Restoranlari Keşfederek Bonus Puanlar Kazanin</Text>
          </CardBody>

          {/*===================RESERVE NOTFOUND BUTTON================*/}
          <CardFooter>
            <Button
              size="md"
              width="100%"
              bg="rgb(248, 179, 51)"
              color="#fff"
              fontWeight="regular"
              fontSize="small"
              _hover={{ bg: "orange" }}
              onClick={() => navigate('/discover')}
            >
              Restoranlari Keşfet
            </Button>
          </CardFooter>
        </Card>
      </Stack>
    </React.Fragment>
  );
};

export default ReserveNotFound;
