import { Select } from "antd";

const SelectComponent = ({ options, placeholder, getValue, name }) => {
  return (
    <Select
      name={name}
      style={{ width: "100%", fontSize: "14px" }}
      onChange={getValue}
      placeholder={placeholder}
    >
      {options.map((option, index) => {
        return <Select.Option value={option} key={index} />;
      })}
    </Select>
  );
};

export default SelectComponent;
