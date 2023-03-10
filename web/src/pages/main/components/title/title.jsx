import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

const Title = ({ title }) => {
  return (
    <React.Fragment>
      <Heading
        color="rgb(0,0,0,0.6)"
        fontWeight="600"
        fontFamily="unset"
        pb={5}
      >
        {title}
      </Heading>

      <Divider
        orientation="horizontal"
        colorScheme="red"
        w={["300px", "400px", "500px", "700px"]}
        border="1px solid orange"
        m="30px 0px"
      />
    </React.Fragment>
  );
};

export default Title;
