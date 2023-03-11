import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

const QuestionCard = ({ quetion, reply }) => {
  return (
    <React.Fragment>
      <Accordion
        allowToggle
        bg="blackAlpha.100"
        w={["350px", "400px", "500px", "800px"]}
      >
        <AccordionItem>
          <Text>
            <AccordionButton h="60px">
              <Box
                flex="1"
                textAlign="center"
                fontWeight="bold"
                fontSize="16px"
                color="#000"
              >
                {quetion}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel p="20px 40px" fontSize="14px">
            {reply}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </React.Fragment>
  );
};

export default QuestionCard;
