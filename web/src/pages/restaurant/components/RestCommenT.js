import React from "react";
import { Box, Text, Textarea, FormControl } from "@chakra-ui/react";
import Buttons from "../../../components/shared/button/Button";

const RestComment = () => {
  return (
    <React.Fragment>
      <Box
        minW={["100%", "100%", "80%", "60%"]}
        display="flex"
        flexDirection="column"
        gap={5}
        mb={100}
      >
        {/*------------------Comment title------------ */}
        <Box>
          <Text fontWeight={300} fontSize="2xl">
            Restorana Yorum Yaz
          </Text>
        </Box>

        {/*------------------Comment Input------------ */}

        <FormControl gap={10}>
          <Textarea
            bg="#fff"
            placeholder="Restoranimiz hakkinda herhangi bir yorum birakiniz"
            mb={10}
            _placeholder={{ fontSize: "12px" }}
          />
          <Buttons
            width="100%"
            background="#FF5B5B"
            title="Yorum Yap"
            fontsize={14}
            fontweight={100}
            color="#fff"
          />
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default RestComment;
