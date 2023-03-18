import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import BannerBackground from "../../../../assets/images/banner.jpg";
import Inputs from "../../../../components/shared/Input/Inputs";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const Banner = () => {
  //*-----------------Filtreleme state------------------
  const [filter, setFilter] = React.useState("");

  const onSearch = () => {
    //*-------------------Eğer inputbar boş ise-------------
    if (filter === "")
      return toast.warn("Arama Kismi Boş olamaz", {
        position: "top-center",
        autoClose: 1500,
      });

    //*----------------Eğer inputbar Boşd eğil ise----------

    // todo : yapilacak işlemler

    //*--------------After submit clear input----------------
    setFilter("");
  };

  return (
    <React.Fragment>
      <Stack maxW="100vw" h="80vh">
        {/*----------------------------------Banner Container------------------*/}
        <Stack
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

              <Stack
                direction={["column", "column", "column", "row"]}
                alignItems="center"
                justifyContent="center"
              >
                <InputGroup>
                  <Inputs
                    height={50}
                    width={["250px", "250px", "350px", "550px"]}
                    placeholder="Restaurant / Yemek Categorine / göre Arayiniz"
                    color="#000"
                    background="#fff"
                    value={filter}
                    onchange={(e) => setFilter(e.target.value)}
                  />

                  <InputRightElement w="3.5rem" height={50}>
                    <BsSearch
                      color="#000"
                      cursor="pointer"
                      fontSize={20}
                      onClick={onSearch}
                    />
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </Stack>

            {/*-----------------------Alert container------------------- */}
            <ToastContainer />
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Banner;
