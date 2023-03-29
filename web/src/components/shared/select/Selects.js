import React from "react";
import { Select } from "@chakra-ui/react";

const Selects = ({
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
  options,
}) => {
  return (
    <Select
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
      borderLeftRadius="none"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default Selects;
