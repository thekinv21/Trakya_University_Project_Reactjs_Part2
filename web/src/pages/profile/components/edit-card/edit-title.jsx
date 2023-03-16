import { Text } from "@chakra-ui/react";
import React from "react";

const EditTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Text
        textAlign="start"
        fontSize={["18px", "22px", "24px", "30px"]}
        fontFamily="revert"
      >
        {title}
      </Text>
    </React.Fragment>
  );
};

export default EditTitle;
