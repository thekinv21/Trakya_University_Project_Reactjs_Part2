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
import { useDispatch } from "react-redux";
import { addReservation } from "../../../redux/RestaurantSlicer";

const ReserveModal = ({
  close,
  open,
  reserveForm,
  restaurantInfo,
  setReserveForm,
}) => {
  //*=======REDUX FONKSYONU KULLANMAK İÇİN===========

  const dispatch = useDispatch();

  //*=================NAVİGATİON SETUP===============

  const navigate = useNavigate();

  //*===========RESERVE EDEN KİŞİ BİLGİLERİ==========

  const [reservedPeople, setReservedPeople] = React.useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    comment: "",
  });

  //*==============RESERVE INPUT DEĞİŞİRSE============

  const handleChange = (e) => {
    setReservedPeople({ ...reservedPeople, [e.target.name]: e.target.value });
  };

  //*=============RESERVE BUTTONA BASILIRSA===========

  const handleClick = (e) => {
    e.preventDefault();

    //*==========EĞER HERHANGİ INPUT BOŞ İSE==========
    if (
      reservedPeople.firstname === "" ||
      reservedPeople.lastname === "" ||
      reservedPeople.phone_number === "" ||
      reservedPeople.comment === ""
    )
      return toast.warn("Bütün Alanlari Doldurunuz!", {
        position: "top-center",
        autoClose: 1500,
      });

    //*==============REZERVE MODALI KAPAT=============
    close();

    //*==============REZERVE LİSTESİNE EKLE===========

    dispatch(
      addReservation({
        restaurantName: restaurantInfo.restaurantName,
        restaurantAddress: restaurantInfo.detailedAddress,
        restaurantImage: restaurantInfo.restaurantImage,
        reservedPeopleName: reservedPeople.firstname,
        reservedPeopleSurname: reservedPeople.lastname,
        reservedPeoplePhone: reservedPeople.phone_number,
        reservedPeopleComment: reservedPeople.comment,
        reserveId: reserveForm.reserveId,
        reserveDate: reserveForm.reserveDate,
        reserveTime: reserveForm.reserveTime,
        reservePeoples: reserveForm.reservePeoples,
      })
    );

    //*==============REZERVE EDİLDİ ALERT=============

    toast.success("Rezerve Edildi!", {
      position: "top-center",
      autoClose: 1600,
    });

    //*==============REZERVE SAYFASINA GEÇ=============

    setTimeout(() => {
      navigate("#");
    }, 2500);

    //*==============INPUTLARI TEMİZLE==============

    setReservedPeople({
      firstname: "",
      lastname: "",
      phone_number: "",
      comment: "",
    });
    setReserveForm({
      reserveId: "",
      reservePeoples: "",
      reserveDate: "",
      reserveTime: "",
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {/*======================RESERVE MODAL CONTAİNER==================== */}

      <Modal isOpen={open} onClose={close} isCentered>
        <ModalOverlay />

        <ModalContent>
          {/*=======================RESERVE MODAL TİTLE=================== */}

          <ModalHeader textAlign="center" fontSize={15} fontWeight={400}>
            Rezervasyonu Tamamlayiniz
          </ModalHeader>

          {/*=======================RESERVE MODAL CLOSE=================== */}

          <ModalCloseButton />

          {/*=======================RESERVE MODAL CONTENT================== */}
          <ModalBody>
            <Box borderRadius={5} p={2}>
              {/*===================RESERVE RESTAURANT TİTLE================*/}

              <Text fontSize={14} fontWeight={500} pl={2}>
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
                  <Text fontSize={14}>{reserveForm.reservePeoples}</Text>
                </Stack>

                {/*================RESERVE RESTAURANT TARİH=================*/}

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FcCalendar />
                  <Text fontSize={14}>{reserveForm.reserveDate}</Text>
                </Stack>

                {/*================RESERVE RESTAURANT SAAT===================*/}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <FcClock />
                  <Text fontSize={14}>{reserveForm.reserveTime}</Text>
                </Stack>
              </Stack>
            </Box>

            <ModalHeader textAlign="center" fontSize={13} fontWeight={100}>
              Şununla Devam Et
            </ModalHeader>

            {/*================RESERVE EDEN KİŞİ BİLGİLERİ===================*/}

            <VStack p={5} borderRadius={5} gap={5}>
              <Stack direction="row" w="full" gap={5}>
                {/*================RESERVE EDEN KİŞİ ADİ===================*/}
                <Input
                  name="firstname"
                  value={reservedPeople.firstname}
                  onChange={handleChange}
                  placeholder="Adiniz"
                  fontSize={14}
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="#c1c1c1"
                  autoComplete="off"
                />

                {/*================RESERVE EDEN KİŞİ SOYADI===================*/}
                <Input
                  name="lastname"
                  value={reservedPeople.lastname}
                  onChange={handleChange}
                  placeholder="Soyadiniz"
                  fontSize={14}
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  borderColor="#c1c1c1"
                  autoComplete="off"
                />
              </Stack>

              {/*================RESERVE EDEN KİŞİ NUMARASI===================*/}

              <Stack w="full" direction="column" gap={5}>
                <Input
                  name="phone_number"
                  value={reservedPeople.phone_number}
                  onChange={handleChange}
                  placeholder="Cep Telefon"
                  fontSize={15}
                  borderColor="#c1c1c1"
                  _placeholder={{ color: "#000", fontSize: "12px" }}
                  autoComplete="off"
                />
                {/*================RESERVE EDEN KİŞİ YER SEÇİMİ===================*/}
                <Select
                  name="comment"
                  value={reservedPeople.comment}
                  onChange={handleChange}
                  placeholder="Yer Seçiniz"
                  fontSize={15}
                  borderColor="#c1c1c1"
                  _placeholder={{ fontSize: "12px" }}
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
