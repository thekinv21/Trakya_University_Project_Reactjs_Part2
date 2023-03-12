import React from "react";
import LoginContainer from "../../components/containers/login-container/Login-containers";
import { Stack, Image, Text, Link, Flex } from "@chakra-ui/react";
import Karikatur from "../../assets/images/ourPn.png";
import Logo from "../../assets/brand/Logo.svg";
import SignUpForm from "./components/form/sign-up";

const SignUp = () => {
  return (
    <React.Fragment>
      <LoginContainer>
        {/*-----------------------Karikatur and SignUp------------------------*/}
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
                Sign In
              </Text>

              <Stack textAlign="end" fontSize={"sm"} pl={10}>
                <Text>if You have Account.....</Text>

                <Link href="/signin" color="#4462f2">
                  Sign In!
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Flex>

        {/*------------------------Our Logo---------------------------- */}

        <Stack display={["none", "none", "none", "block"]}>
          <Image
            draggable="false"
            position="relative"
            left="-130px"
            src={Logo}
          />
        </Stack>

        {/*------------------------SingUp form---------------------------- */}

        <Stack>
          <SignUpForm />
        </Stack>
      </LoginContainer>
    </React.Fragment>
  );
};

export default SignUp;
