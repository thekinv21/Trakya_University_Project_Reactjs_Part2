import { Text } from "@chakra-ui/react";
import React from "react";

const EditTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Text
        textAlign="start"
        fontSize={["15px", "16px", "16px", "25px"]}
        fontFamily="revert"
      >
        {title}
      </Text>
    </React.Fragment>
  );
};

export default EditTitle;
