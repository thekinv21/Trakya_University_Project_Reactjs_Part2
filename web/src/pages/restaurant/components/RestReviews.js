import React from "react";
import {
  Box,
  Text,
  Image,
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";

const RestReviews = () => {
  //*==================FAKE YORUMLAR=================
  const reviews = [
    {
      name: "Vadim",
      review:
        "Bir Uzak Doğu klaisği. Yaklasık 10 senedir hiç değişmedi, hep kaliteli ve hep iyi…",
    },
    {
      name: "Gürkan",
      review:
        "Servis gayet ilgili ve güleryüzlüydü. Personelin İngilizce konuşması da çok iyi, erkek arkadaşım rahatlıkla sipariş verebildi (yabancı). Geliştirilmesi gereken noktalara değinmem gerekirse: Tuvalet daha özenli olabilirdi, menüde acı skalası olmaması da büyük eksiklikti bize göre.",
    },
    {
      name: "Alperen",
      review:
        "Arkadaşlarımla gittiğimiz, Romantik şık ve nezih her şeyiyle dört dörtlük bir mekan. Fiyatlar kaliteye göre normaldi. Servis personeli bilgiliydi. Tavsiye ederim.",
    },
    {
      name: "Salih",
      review:
        "Every time I am in Istanbul I enjoy a delicious meal at Pera Thai, the best Thai food in Turkey.",
    },
    {
      name: "Furkan",
      review:
        "Foods are great bu service is very slow. Definitely worth trying",
    },
  ];

  return (
    <React.Fragment>
      <Box>
        {reviews.map((user, index) => (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={3}
            boxShadow="lg"
            key={index}
            mb={5}
          >
            <Stack direction="row">
              {/*===================REVİEWS USER PHOTO============== */}
              <Image
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                borderRadius="full"
                boxSize="30px"
              />

              {/*===================REVİEWS USER NAME============== */}
              <Text fontWeight="bold" fontSize="xl">
                {user.name}
              </Text>
            </Stack>

            {/*===================USER RİVİEWS FOR RESTAURANT============*/}
            <Stack spacing={4} mt={4}>
              <Text fontSize={12} textAlign="start" px={10}>
                {user.review}
              </Text>
            </Stack>
          </Box>
        ))}

        {/*===================ADD RİVİEW FOR RESTAURANT============*/}

        <VStack as="form" pt={20}>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="xl">
              Restoranla ilgili Yorumunuz !
            </FormLabel>
            <Textarea bg="blackAlpha.200" />
            <Button
              colorScheme="green"
              fontSize={12}
              fontWeight={100}
              w="100%"
              mt={5}
            >
              Yorum Yap
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </React.Fragment>
  );
};

export default RestReviews;
