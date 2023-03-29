import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  Box,
  VStack,
  Input,
  Select,
} from "@chakra-ui/react";
import Buttons from "../../../components/shared/button/Button";
import { FcConferenceCall, FcCalendar, FcClock } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReserveModal = ({
  close,
  open,
  reserveForm,
  restaurantInfo,
  setReserveForm,
}) => {
  const navigate = useNavigate();

  //*===========RESERVE EDEN KİŞİ BİLGİLERİ==========

  const [form, setForm] = React.useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    yer: "",
  });

  //*==============RESERVE INPUT DEĞİŞİRSE============

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //*=============RESERVE BUTTONA BASILIRSA===========

  const handleClick = (e) => {
    e.preventDefault();

    //*==========EĞER HERHANGİ INPUT BOŞ İSE==========
    if (
      form.firstname === "" ||
      form.lastname === "" ||
      form.phone_number === "" ||
      form.yer === ""
    )
      return toast.warn("Bütün Alanlari Doldurunuz!", {
        position: "top-center",
        autoClose: 1500,
      });

    //*==============REZERVE MODALI KAPAT=============
    close();

    //*==============REZERVE EDİLDİ ALERT=============

    toast.success("Rezerve Edildi!", {
      position: "top-center",
      autoClose: 1600,
    });

    console.log(form)

    //*==============NAVİGATE MAİN PAGE=============

    setTimeout(() => {
      navigate("/main");
    }, 2500);

    //*==============INPUTLARI TEMİZLE==============

    setForm({ firstname: "", lastname: "", phone_number: "" });
    setReserveForm({ kisiSayisi: "", tarih: "", saat: "" });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {/*======================RESERVE MODAL CONTAİNER==================== */}

      <Modal isOpen={open} onClose={close} isCentered>
        <ModalOverlay />

        <ModalContent bg="#d0d0d0">
          {/*=======================RESERVE MODAL TİTLE=================== */}

          <ModalHeader textAlign="center" fontSize={15} fontWeight={400}>
            Rezervasyonu Tamamlayiniz
          </ModalHeader>

          {/*=======================RESERVE MODAL CLOSE=================== */}

          <ModalCloseButton />

          {/*=======================RESERVE MODAL CONTENT================== */}
          <ModalBody>
            <Box bg="whiteAlpha.300" borderRadius={5} p={2}>
              {/*===================RESERVE RESTAURANT TİTLE================*/}

              <Text fontSize={14} fontWeight={500} color="orange" pl={2}>
                {restaurantInfo.restaurantName}
              </Text>

              {/*=================RESERVE RESTAURANT INROMATION=============*/}
              <Stack
                direction="row"
                w="100%"
                justifyContent="space-around"
                py={5}
              >
                {/*================RESERVE RESTAURANT KİŞİ SAYISI===========*/}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FcConferenceCall fontSize={20} />
                  <Text fontSize={14}>{reserveForm.kisiSayisi}</Text>
                </Stack>

                {/*================RESERVE RESTAURANT TARİH=================*/}

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FcCalendar />
                  <Text fontSize={14}>{reserveForm.tarih}</Text>
                </Stack>

                {/*================RESERVE RESTAURANT SAAT===================*/}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FcClock />
                  <Text fontSize={14}>{reserveForm.saat}</Text>
                </Stack>
              </Stack>
            </Box>

            <ModalHeader textAlign="center" fontSize={13} fontWeight={100}>
              Şununla Devam Et
            </ModalHeader>

            {/*================RESERVE EDEN KİŞİ BİLGİLERİ===================*/}

            <VStack bg="#ddd" p={10} borderRadius={5} gap={5}>
              <Stack direction="row" w="full" gap={5}>
                {/*================RESERVE EDEN KİŞİ ADİ===================*/}
                <Input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  placeholder="Adiniz"
                  fontSize={14}
                  size="sm"
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="orange"
                  variant="flushed"
                  autoComplete="off"
                />

                {/*================RESERVE EDEN KİŞİ SOYADI===================*/}
                <Input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  placeholder="Soyadiniz"
                  fontSize={14}
                  size="sm"
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="orange"
                  variant="flushed"
                  autoComplete="off"
                />
              </Stack>

              {/*================RESERVE EDEN KİŞİ NUMARASI===================*/}

              <Stack w="full" direction="column" gap={5}>
                <Input
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  placeholder="Cep Telefon"
                  fontSize={14}
                  borderLeftRadius="none"
                  size="sm"
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="orange"
                  variant="flushed"
                  autoComplete="off"
                />
                {/*================RESERVE EDEN KİŞİ YER SEÇİMİ===================*/}
                <Select
                  name="yer"
                  value={form.yer}
                  onChange={handleChange}
                  placeholder="Yer Seçiniz"
                  fontSize={13}
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="orange"
                  variant="flushed"
                >
                  <option value="Cam Kenari">Cam Kenari</option>
                  <option value="Ortada">Ortada</option>
                  <option value="Kapiya Yakin">Kapiya Yakin</option>
                </Select>
              </Stack>
            </VStack>
          </ModalBody>

          {/*===========================RESERVE ETME BUTTON=======================*/}
          <ModalFooter>
            <Buttons
              title="Şimdi Rezervasyon Yap"
              background="#FF6571"
              color="#fff"
              fontweight={100}
              fontsize={13}
              width="100%"
              onclick={handleClick}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ReserveModal;
