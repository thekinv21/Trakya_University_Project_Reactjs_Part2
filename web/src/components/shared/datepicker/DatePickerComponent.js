import { DatePicker } from "antd";
import moment from "moment";

const DatePickerComponent = ({ onChange, name, busyDates }) => {

  //*==============DATEPİCKER STYLES================
  const style = {
    width: "100%",
  };

  //*============= ALL DİSABLEDDATES================
  const disabledDates = busyDates.map((date) => moment(date));

  function disabledDate(current) {
    // Disable all Sundays
    if (current.day() === 0) {
      return true;
    }

    // Disable specific dates
    return disabledDates.some((date) => current.isSame(date, "day"));
  }
  return (
    <DatePicker
      disabledDate={disabledDate}
      format="YYYY-MM-DD"
      name={name}
      style={style}
      onChange={onChange}
      placeholder="Tarih Seçiniz"
    />
  );
};

export default DatePickerComponent;
