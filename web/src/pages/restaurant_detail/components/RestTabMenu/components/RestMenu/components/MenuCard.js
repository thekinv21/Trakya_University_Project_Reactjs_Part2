import { Box, Image, Text } from "@chakra-ui/react";

const MenuCard = ({ menuInfo }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      bg="whiteAlpha.300"
      p={3}
      mb={3}
      display={{ base: "column", md: "flex" }}
      gap={4}
    >
      <Image
        src={menuInfo.foodImage}
        width={{ base: "100%", md: 200 }}
        height={100}
        objectFit="cover"
        borderRadius="md"
        draggable={false}
      />
      <Box mt={2}>
        <Text fontWeight="bold" fontSize="lg">
          {menuInfo.foodName}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Categorisi: {menuInfo.category.categoryName}
        </Text>
        <Text color="gray.500" fontSize="xs">
          Fiyat: {menuInfo.price}
        </Text>
      </Box>
    </Box>
  );
};

export default MenuCard;
