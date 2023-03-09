import { Input } from "@chakra-ui/react";

const Inputs = ({
  name,
  width,
  height,
  background,
  color,
  fontsize,
  fontweight,
  value,
  onchange,
  placeholder,
}) => {
  return (
    <Input
      name={name}
      w={width}
      h={height}
      bg={background}
      color={color}
      placeholder={placeholder}
      fontSize={fontsize}
      fontWeight={fontweight}
      value={value}
      onChange={onchange}
    />
  );
};

export default Inputs;
