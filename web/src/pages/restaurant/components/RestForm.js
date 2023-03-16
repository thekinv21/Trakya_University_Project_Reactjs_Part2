import React from "react";
import { VStack, FormControl, FormLabel } from "@chakra-ui/react";
import Selects from "../../../components/shared/select/Selects";
import Buttons from "../../../components/shared/button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {

  //*------------------DatePicker için özel state--------------

  const [selectedDate, setSelectedDate] = React.useState(null);

  //*--------------Masa Ayirt butona basildiğinda--------------

  const handleSubmit = () => {};

  //*-------------Buraya kişiler ve saatler statei al----------
  const kisiSayisi = [
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const saatler = [
    { value: "10:30", label: "10:30" },
    { value: "11:30", label: "11:30" },
    { value: "12:30", label: "12:30" },
    { value: "13:30", label: "13:30" },
    { value: "14:30", label: "14:30" },
    { value: "15:30", label: "15:30" },
  ];

  return (
    <React.Fragment>
      {/*----------------------Form container----------------- */}
      <VStack
        as="form"
        w={["90%", "100%", "90%", "30%", "25%"]}
        borderRadius={5}
        p={10}
        justifyContent="center"
        alignItems="center"
      >
        {/*------------------Kişi sayısı input-----------------*/}
        <FormControl>
          <FormLabel fontSize={16}>Kişi Sayisi</FormLabel>
          <Selects
            name="kisiSayisi"
            options={kisiSayisi}
            width="100%"
            placeholder="Seçiniz"
            background='#fff'
            outline="none"
            border="none"
            fontsize={16}
          />
        </FormControl>

        {/*------------------------tarih input----------------- */}
        <FormControl>
          <FormLabel fontSize={16}>Tarih</FormLabel>

          <DatePicker
            name="tarih"
            className="date-peeker"
            placeholderText="Seçiniz"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </FormControl>

        {/*------------------------saat input----------------- */}
        <FormControl>
          <FormLabel fontSize={16}>Saat</FormLabel>
          <Selects
            name="saat"
            options={saatler}
            background='#fff'
            // background="#ddd"
            outline="none"
            border="none"
            placeholder="Seçiniz"
            fontsize={16}
          />
        </FormControl>

        {/*---------------------Masa Ayirt Button------------ */}
        <FormControl pt={10}>
          <Buttons
            title="Masa Ayirtmak istiyorum"
            width="100%"
            background="#FF5B5B"
            color="#fff"
            fontsize={13}
            fontweight={100}
            onclick={handleSubmit}
          />
        </FormControl>
      </VStack>
    </React.Fragment>
  );
};

export default Form;
