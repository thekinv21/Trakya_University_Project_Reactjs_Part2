import { Select } from "antd";

const SelectClock = ({ options = [], placeholder, getValue, name }) => {
  return (
    <Select
      name={name}
      style={{ width: "100%" }}
      onChange={getValue}
      placeholder={placeholder}
    >
      {options.map((option, index) => {
        const [time, isAvailable] = Object.entries(option)[0];

        return (
          <Select.Option value={time} key={index} disabled={isAvailable}>
            {time}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default SelectClock;
