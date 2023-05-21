import { Box, Text, Flex } from "@chakra-ui/react";
import { Rate } from "antd";

const ReviewCard = ({ review }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      width="100%"
      bg="whiteAlpha.300"
      p={3}
      mb={3}
    >
      <Box ml={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="lg">
            {review.username}
          </Text>
          <Rate
            disabled
            allowHalf
            value={review.star}
            style={{ fontSize: "16px" }}
          />
        </Flex>

        <Box pt={2}>
          <Text color="gray.500" fontSize="xs">
            {review.content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCard;
