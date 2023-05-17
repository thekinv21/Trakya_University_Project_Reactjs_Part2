import React, { useState } from "react";
import { Modal, Input } from "antd";
import DataItems from "./DataItems/FormDataItems";
import { Box, VStack } from "@chakra-ui/react";
import { FcCallback, FcManager } from "react-icons/fc";
import { toast } from "react-toastify";

const ReserveModal = ({
  isModalOpen,
  data,
  setIsModalOpen,
  restaurantInfo,
}) => {
  const { TextArea } = Input;

  const [myData, setMyData] = useState({
    name: "",
    surname: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setMyData({ ...myData, [e.target.name]: e.target.value });
  };

  const handleOk = () => {
    if (myData.name === "" || myData.surname === "" || myData.phone === "")
      return toast.warn("Zorunlu Alanlari Doldurunuz!", {
        position: "top-center",
        autoClose: 1600,
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Rezervasiyonu Tamamla"
      open={isModalOpen}
      onOk={handleOk}
      centered
      style={{ textAlign: "center" }}
      okButtonProps={{ style: { width: "100%" } }}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okText="Rezervasyon Yap!"
    >
      {/*===================RESERVE INFO===============*/}
      <DataItems data={data} restaurantInfo={restaurantInfo} />

      {/*===============RESERVE LAST STEPS=============*/}
      <VStack
        as="form"
        my={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" w="100%" gap={5}>
          <Input
            name="name"
            value={myData.name}
            onChange={handleChange}
            prefix={<FcManager fontSize={20} />}
            placeholder="Ad"
          />
          <Input
            name="surname"
            value={myData.surname}
            onChange={handleChange}
            prefix={<FcManager fontSize={20} />}
            placeholder="Soyad"
          />
        </Box>

        <Input
          name="phone"
          value={myData.phone}
          onChange={handleChange}
          prefix={<FcCallback fontSize={20} />}
          placeholder="Numara"
        />
        <TextArea
          name="comment"
          value={myData.comment}
          onChange={handleChange}
          placeholder="Herhangi bir yorum"
        />
      </VStack>
    </Modal>
  );
};

export default ReserveModal;
