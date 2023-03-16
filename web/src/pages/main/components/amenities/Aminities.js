import React from "react";
import AminitiesContainer from "./components/Container";
import Title from "../title/title";
import AminitiesContent from "./components/Content";
import AminitiesCard from "./components/Card";
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
      <AminitiesContainer>
        {/*==================TİTLE==================== */}

        <Title title="Sağladiğimiz Kolayliklar" />

        {/*==================CONTENT==================== */}

        <AminitiesContent>
          {/*==================Aminities==================== */}

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
        </AminitiesContent>
      </AminitiesContainer>
    </React.Fragment>
  );
};

export default Aminities;
