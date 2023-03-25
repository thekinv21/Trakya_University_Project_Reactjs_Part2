import { Input } from "@chakra-ui/react";

const Inputs = ({
  id,
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
  onblur,
  variant,
  focusBorderColor,
  borderLeftRadius,
  borderRightRadius,
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
      onBlur={onblur}
      variant={variant}
      id={id}
      focusBorderColor={focusBorderColor}
      borderLeftRadius={borderLeftRadius}
      borderRightRadius={borderRightRadius}
    />
  );
};

export default Inputs;
