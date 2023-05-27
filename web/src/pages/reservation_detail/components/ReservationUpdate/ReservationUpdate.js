import { Form, Input, Button } from "antd";
import DatePickerComponent from "./../../../../components/shared/datepicker/DatePickerComponent";
import SelectClock from "./../../../../components/shared/selects/SelectClock";
import SelectComponent from "./../../../../components/shared/selects/SelectComponent";
import styles from "./ReservetaionUpdate.module.css";
import { useReservationUpdate } from "./useReservationUpdate";
import SelectSortBy from "../../../../components/shared/selects/SelectSort";

const ReservationUpdate = ({ restaurantDetail, reservationDetail }) => {
  const { TextArea } = Input;

  const {
    handleUpdate,
    peopleLength,
    status,
    emptyHours,
    emptyLoading,
    handleChange,
    updateReserve,
  } = useReservationUpdate({
    restaurantDetail,
    reservationDetail,
  });

  return (
    <>
      <Form layout="vertical" className={styles.form}>
        <Form.Item>
          <h3 className={styles.title}>Rezervasyonu Güncelle</h3>
        </Form.Item>

        {/*=======================UPDATE PHONE=====================*/}
        <Form.Item>
          <Input
            type="tel"
            name="phone"
            placeholder="Numaraniz"
            autoComplete="off"
            value={updateReserve.phone}
            onChange={handleChange}
          />
        </Form.Item>

        {/*===================UPDATE RESERVE STATUS====================*/}
        <Form.Item>
          <SelectSortBy
            name="status"
            options={status}
            placeholder={"Rezerve Durumu"}
            getValue={(value) => {
              updateReserve.status = value;
            }}
          />
        </Form.Item>
        {/*=======================UPDATE TARİH======================*/}
        <Form.Item>
          <DatePickerComponent
            name={"reserveDate"}
            busyDates={["2023-05-21"]}
            onChange={(value) => {
              updateReserve.reserveDate = value
                ? value.format("YYYY-MM-DD")
                : null;
            }}
          />
        </Form.Item>

        {/*=======================UPDATE SAAT=======================*/}
        <Form.Item>
          <SelectClock
            name="reserveTime"
            options={emptyLoading ? [] : emptyHours}
            placeholder={"Saat Seçiniz"}
            getValue={(value) => {
              updateReserve.reserveTime = value;
            }}
          />
        </Form.Item>

        {/*===================UPDATE KİŞİ SAYİSİ====================*/}
        <Form.Item>
          <SelectComponent
            name="peopleCount"
            options={peopleLength}
            placeholder={"Kişi Sayisi Seçiniz"}
            getValue={(value) => {
              updateReserve.peopleCount = value;
            }}
          />
        </Form.Item>
        {/*===================UPDATE NOTE====================*/}
        <Form.Item>
          <TextArea
            name="note"
            placeholder="Güncellenecek yorumunuz!"
            autoSize={{ minRows: 2, maxRows: 6 }}
            value={updateReserve.note}
            onChange={handleChange}
          />
        </Form.Item>

        {/*===================RESERVE UPDATE BUTTON====================*/}
        <Form.Item>
          <Button
            type="primary"
            onClick={handleUpdate}
            className={styles.reserveButton}
          >
            Rezervasyonu Güncelle
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ReservationUpdate;
