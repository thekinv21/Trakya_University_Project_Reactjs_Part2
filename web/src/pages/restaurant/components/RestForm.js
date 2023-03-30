import React from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Selects from "../../../components/shared/select/Selects";
import Buttons from "../../../components/shared/button/Button";
import { FcConferenceCall, FcCalendar, FcClock } from "react-icons/fc";
import ReserveModal from "./ReserveModal";
import { toast, ToastContainer } from "react-toastify";

const Form = ({ restaurantInfo }) => {
  //?==================UNİQUE RESERVE ID=================

  function generateUniqueId() {
    const randomNumber = Math.random() * 1000000000;
    const uniqueId = Math.round(randomNumber);
    return uniqueId;
  }

  const uniqueId = generateUniqueId();

  //?===================INPUT VALUES======================

  const [form, setForm] = React.useState({
    reserveId: uniqueId,
    reservePeoples: "",
    reserveDate: "",
    reserveTime: "",
  });

  //*================Buraya kişiler ve saatler statei al==========
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

  //*=======================RESERVE MODAL SETUPS======================

  const { isOpen, onOpen, onClose } = useDisclosure();

  //*=======================RESERVE INPUT DEĞİŞTİĞİNDE================

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //*================MASA AYIRT BUTONUNA BASİDİĞİNDA===============

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.reservePeoples === "" ||
      form.reserveDate === "" ||
      form.reserveTime === ""
    )
      return toast.warn("Alanlar Boş Olamaz!", {
        position: "top-center",
        autoClose: 1500,
      });

    onOpen();
  };

  return (
    <React.Fragment>
      {/*=====================FORM CONTAİNER=================*/}
      <VStack
        as="form"
        borderRadius={5}
        w="100%"
        p={10}
        h={400}
        justifyContent="center"
        alignItems="center"
        bg="blackAlpha.300"
      >
        {/*=====================KİŞİ SAYISI====================*/}
        <FormControl>
          <FormLabel fontSize={16}>Kişi Sayisi</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<FcConferenceCall />} />
            <Selects
              name="reservePeoples"
              options={kisiSayisi}
              value={form.reservePeoples}
              onchange={handleChange}
              width="100%"
              placeholder="Seçiniz"
              background="#fff"
              outline="none"
              border="none"
              fontsize={16}
            />
          </InputGroup>
        </FormControl>

        {/*=====================TARİH INPUT====================*/}
        <FormControl>
          <FormLabel fontSize={16}>Tarih</FormLabel>

          <InputGroup>
            <InputLeftAddon children={<FcCalendar />} />

            <Input
              name="reserveDate"
              type="date"
              value={form.reserveDate}
              onChange={handleChange}
              width="100%"
              background="#fff"
              outline="none"
              border="none"
              fontSize={16}
              borderLeftRadius="none"
            />
          </InputGroup>
        </FormControl>

        {/*=====================SAAT INPUT====================*/}
        <FormControl>
          <FormLabel fontSize={16}>Saat</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<FcClock />} />
            <Selects
              name="reserveTime"
              value={form.reserveTime}
              onchange={handleChange}
              options={saatler}
              background="#fff"
              outline="none"
              border="none"
              placeholder="Seçiniz"
              fontsize={16}
            />
          </InputGroup>
        </FormControl>

        {/*==================MASA AYIRT BUTONU==================*/}
        <FormControl pt={5}>
          <Buttons
            title="Masa Ayirt"
            width="100%"
            background="#FF5B5B"
            color="#fff"
            fontsize={13}
            fontweight={100}
            onclick={handleSubmit}
          />
        </FormControl>

        <ToastContainer />
      </VStack>

      {/*=====================RESERVE MODAL====================*/}

      <ReserveModal
        close={onClose}
        open={isOpen}
        reserveForm={form}
        setReserveForm={setForm}
        restaurantInfo={restaurantInfo}
      />
    </React.Fragment>
  );
};

export default Form;
