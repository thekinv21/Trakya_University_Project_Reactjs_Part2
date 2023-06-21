import React from "react";
import Title from "../title/title";
import AminitiesCard from "./components/Card";
import { Box } from "@chakra-ui/react";
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcCamcorder,
} from "react-icons/fc";

const Aminities = () => {
  return (
    <React.Fragment>
      {/*==================CONTAİNER==================== */}
      <Box className="container-fluid pt-5">
        {/*==================TİTLE==================== */}

        <Title title="Sağladiğimiz Kolayliklar" />

        {/*==================Aminities==================== */}

        <Box
          className="container d-flex pt-5"
          justifyContent="space-evenly"
          flexWrap="wrap"
          textAlign="center"
          gap={5}
        >
          <AminitiesCard
            icon={<FcAssistant />}
            title="Canli Destek"
            text="Uluslararasi ve her zaman yeni restoranlar peşinde."
          />

          <AminitiesCard
            icon={<FcDonate />}
            title="Kolay Ödeme"
            text="Restoran rezervasyonlarini kolaylaştiriyoruz - web ya da uygulama üzerinden çevrimiçi ödeme yapabilirsiniz"
          />

          <AminitiesCard
            icon={<FcInTransit />}
            title="Hizli Ulaşim"
            text="Siparişler Hizli ve Güvenilir şekilde teslim edilmektedir"
          />

          <AminitiesCard
            icon={<FcCamcorder />}
            title="Canli İzle"
            text="Siparişiniz hazir olup olmadiğini uygulama üzerinden izleyebilirsiniz"
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Aminities;
