import React from "react";
import { Stack, Image, Text, Link, Flex } from "@chakra-ui/react";
import LoginContainer from "../../components/containers/login-container/Login-containers";
import Karikatur from "../../assets/images/ourPn.png";
import Logo from "../../assets/brand/Logo.svg";
import { ToastContainer } from "react-toastify";
import SignInForm from "./components/form/sign-in";

const SignIn = () => {
  return (
    <React.Fragment>
      {/*---------------------------Alert Container------------------ */}
      <ToastContainer />

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

        {/*------------------------Our Logo---------------------------- */}

        <Stack display={["none", "none", "none", "block"]}>
          <Image
            draggable="false"
            position="relative"
            left="-130px"
            src={Logo}
          />
        </Stack>

        {/*------------------------SingIn form---------------------------- */}

        <Stack>
          <SignInForm />
        </Stack>
      </LoginContainer>
    </React.Fragment>
  );
};

export default SignIn;
