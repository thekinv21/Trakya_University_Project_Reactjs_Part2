import { Input } from "@chakra-ui/react";

const Inputs = ({
  type,
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
  border,
  outline,
}) => {
  return (
    <Input
      type={type}
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
      border={border}
      outline={outline}
      autoComplete="off"
      _placeholder={{ fontSize: "12px" }}
    />
  );
};

export default Inputs;
