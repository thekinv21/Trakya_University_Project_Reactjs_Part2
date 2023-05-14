import { Select } from "antd";

const SelectPeoples = ({ options, placeholder, getValue, name }) => {
  return (
    <Select
      name={name}
      style={{ width: "100%" }}
      onChange={getValue}
      placeholder={placeholder}
    >
      {options.map((option, index) => {
        return <Select.Option value={option} key={index} />;
      })}
    </Select>
  );
};

export default SelectPeoples;
