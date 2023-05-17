import { Button, Heading, VStack } from "@chakra-ui/react";
import DatePickerComponent from "../../../../components/shared/datepicker/DatePickerComponent";
import { useFormik } from "formik";
import ReserveModal from "../ReserveModal/ReserveModal";
import { useState } from "react";
import { styles } from "./ReserveFormStyle";
import { toast } from "react-toastify";
import { useGetEmptyHours } from "../../../../api/restaurant";
import SelectClock from "./../../../../components/shared/selects/SelectClock";
import SelectComponent from "../../../../components/shared/selects/SelectComponent";

const ReserveForm = ({ restaurantInfo }) => {
  const todayDate = new Date();

  const { data, isLoading } = useGetEmptyHours(
    restaurantInfo.id,
    todayDate.toISOString().slice(0, 10)
  );

  //*====================MODAL SETUP================
  const [isModalOpen, setIsModalOpen] = useState(false);

  //*===================INPUT VALUES================
  const { values, handleSubmit } = useFormik({
    initialValues: {
      peoples: "",
      date: todayDate,
      clock: "",
    },
    onSubmit: (values) => {
      if (values.clock === "" || values.date === "" || values.peoples === "")
        return toast.warn("Zorunlu Alanlari Doldurunuz", {
          autoClose: 1600,
          position: "top-center",
        });

      setIsModalOpen(true);
    },
  });

  //*=================PEOPLE LENGTHS ARRAY=============
  const peopleLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <VStack onSubmit={handleSubmit} sx={styles.form} as="form">
      {/*=====================FORM TİTLE==================*/}
      <Heading sx={styles.title}>
        {"Rezervasyon Form!".toLocaleUpperCase()}
      </Heading>

      {/*===================KİŞİ SAYİSİ====================*/}
      <SelectComponent
        name={"peoples"}
        options={peopleLength}
        getValue={(selectedValue) => {
          values.peoples = selectedValue;
        }}
        placeholder={"Kişi Sayisi"}
      />
      {/*=======================TARİH======================*/}
      <DatePickerComponent
        name={"date"}
        busyDates={restaurantInfo.busyDates}
        onChange={(value) => {
          values.date = value ? value.format("YYYY-MM-DD") : null;
        }}
      />
      {/*=======================SAAT=======================*/}
      <SelectClock
        name={"clock"}
        options={isLoading ? [] : data}
        getValue={(selectedValue) => {
          values.clock = selectedValue;
        }}
        placeholder={"Saat Seçiniz"}
      />
      {/*===================RESERVE BUTTON=================*/}
      <Button
        type="submit"
        colorScheme="messenger"
        sx={styles.button}
        size="sm"
      >
        Rezerve Et
      </Button>

      {/*===================RESERVE MODAL=================*/}
      <ReserveModal
        data={values}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        restaurantInfo={restaurantInfo}
      />
    </VStack>
  );
};

export default ReserveForm;
