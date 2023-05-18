import { Stack, Image, Text, Link, Flex } from "@chakra-ui/react";
import Karikatur from "../../../../assets/images/ourPn.png";

const LoginKarikatur = () => {
  return (
    <Flex
      h="100%"
      alignItems="flex-end"
      display={["none", "none", "none", "flex"]}
    >
      <Stack>
        <Image draggable="false" h={700} src={Karikatur} />
      </Stack>

      <Stack position="relative" bottom={200} left="-80px">
        <Stack>
          <Text fontSize="4xl" fontWeight="300">
            Sign Up
          </Text>

          <Stack textAlign="end" fontSize={"sm"} pl={10}>
            <Text>Create Account...</Text>

            <Link href="/signup" color="#4462f2">
              Sign Up now!
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LoginKarikatur;
