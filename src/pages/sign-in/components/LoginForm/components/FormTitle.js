import { Heading, Stack, Text } from "@chakra-ui/layout";

const FormTitle = () => (
  <Stack align="center" pb={50}>
    <Heading fontSize="4xl" fontWeight="400" textAlign="center" color="#ddd">
      Kolaylikla Oturum Açarak
    </Heading>
    <Text fontSize="1xl" color="gray.400" align="center">
      tüm harika özelliklerimizin keyfini çikarin ✌️
    </Text>
  </Stack>
);

export default FormTitle;
