import { Button } from "@chakra-ui/react";

const Buttons = ({
  type,
  title,
  width,
  height,
  background,
  color,
  fontsize,
  fontweight,
  hover,
  size,
  onclick,
  borderRadius,
}) => {
  return (
    <Button
      type={type}
      w={width}
      h={height}
      bg={background}
      color={color}
      cursor={"pointer"}
      fontSize={fontsize}
      fontWeight={fontweight}
      _hover={{ bg: hover }}
      size={size}
      onClick={onclick}
      borderRadius={borderRadius}
    >
      {title}
    </Button>
  );
};

export default Buttons;
