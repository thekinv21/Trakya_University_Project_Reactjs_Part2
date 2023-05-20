import { Form, Input, Button } from "antd";
import DatePickerComponent from "../../../../components/shared/datepicker/DatePickerComponent";
import SelectComponent from "../../../../components/shared/selects/SelectComponent";
import SelectClock from "../../../../components/shared/selects/SelectClock";
import styles from "./ReservedForm.module.css";
import { useReservedForm } from "./useReservedForm";

const ReservedForm = ({ restaurantInfo }) => {
  const { TextArea } = Input;

  const {
    peopleLength,
    data,
    isLoading,
    reserveData,
    handleChange,
    handleClick,
  } = useReservedForm({ restaurantInfo });

  return (
    <Form layout="vertical" className={styles.form}>
      {/*=======================NAME=====================*/}
      <Form.Item hasFeedback>
        <Input
          name="name"
          placeholder="Adinizi giriniz"
          value={reserveData.name}
          onChange={handleChange}
        />
      </Form.Item>

      {/*=======================PHONE=====================*/}
      <Form.Item hasFeedback>
        <Input
          type="tel"
          name="phone"
          placeholder="Numaranizi giriniz"
          value={reserveData.phone}
          onChange={handleChange}
        />
      </Form.Item>
      {/*=======================TARİH======================*/}
      <Form.Item>
        <DatePickerComponent
          name={"reserveDate"}
          busyDates={restaurantInfo.busyDates}
          onChange={(value) => {
            reserveData.dateTime = value ? value.format("YYYY-MM-DD") : null;
          }}
        />
      </Form.Item>

      {/*=======================SAAT=======================*/}
      <Form.Item>
        <SelectClock
          name="reserveTime"
          options={isLoading ? [] : data}
          placeholder={"Saat Seçiniz"}
          getValue={(value) => {
            reserveData.reserveTime = value;
          }}
        />
      </Form.Item>

      {/*===================KİŞİ SAYİSİ====================*/}
      <Form.Item>
        <SelectComponent
          name="peopleCount"
          options={peopleLength}
          placeholder={"Kişi Sayisi Seçiniz"}
          getValue={(value) => {
            reserveData.peopleCount = value;
          }}
        />
      </Form.Item>
      {/*===================NOTE====================*/}
      <Form.Item>
        <TextArea
          name="note"
          placeholder="Herhangi bir yorum yaziniz!"
          autoSize={{ minRows: 2, maxRows: 6 }}
          value={reserveData.note}
          onChange={handleChange}
        />
      </Form.Item>

      {/*===================RESERVE BUTTON====================*/}
      <Form.Item>
        <Button
          type="primary"
          onClick={handleClick}
          className={styles.reserveButton}
        >
          Rezervasyon Yap!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReservedForm;
