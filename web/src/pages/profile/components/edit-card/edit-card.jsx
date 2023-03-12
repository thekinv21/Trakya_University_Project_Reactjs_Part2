import React from "react";
import { Card } from "@chakra-ui/react";

const EditContentCard = ({ children }) => {
  return (
    <React.Fragment>
      <Card
        bg="#ddd"
        color="#000"
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
        minW={["320px", "495px", "440px", "570px"]}
        maxW={["340px", "340px", "340px", "570px"]}
        h={["500px", "600px", "500px", "500px"]}
        p="16px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Card>
    </React.Fragment>
  );
};

export default EditContentCard;
