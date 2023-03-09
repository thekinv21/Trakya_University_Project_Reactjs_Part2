import { Button } from "@chakra-ui/react";

const Buttons = ({
  title,
  width,
  height,
  background,
  color,
  fontsize,
  fontweight,
  hover,
}) => {
  return (
    <Button
      w={width}
      h={height}
      bg={background}
      color={color}
      cursor={"pointer"}
      fontSize={fontsize}
      fontWeight={fontweight}
      _hover={{ bg: hover }}
    >
      {title}
    </Button>
  );
};

export default Buttons;
