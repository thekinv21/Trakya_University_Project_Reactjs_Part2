import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Buttons from "../../../components/shared/button/Button";

const RestPuan = () => {
  return (
    <Box
      spacing={5}
      maxW="100%"
      borderRadius={10}
      bg="gray.200"
      p={5}
    >
      <Stack textAlign="start" spacing={5}>
        {/*===================TİTLE================ */}
        <Heading fontSize={20} fontWeight={500}>
          Yemek yiyin. Puanlari Kapin
        </Heading>
        {/*===================SUBTİTLE================ */}
        <Text fontSize={12}>
          Masanizi online reserve edin ve Rezztoran Bonus Puanlari ile nakit
          iadesi kazanin! <br /> Kazanilan her 1000 puan 25TL değerindedir
        </Text>

        {/*===================DAHA FAZLA BİLGİ================ */}

        <Buttons
          title="Daha fazla bilgi"
          fontsize={13}
          fontweight={100}
          width={["100%", "100%", "100%", "200px"]}
        />
      </Stack>
    </Box>
  );
};

export default RestPuan;
