import React from "react";
import AboutContainer from "./components/About-container";
import Title from "./../main/components/title/title";
import AboutCard from "./components/about-card";
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcCamcorder,
} from "react-icons/fc";
import AboutContent from "./components/about-content";

const About = () => {
  return (
    <React.Fragment>
      <AboutContainer>
        <Title title="Rezztoran Hakkinda" />

        <AboutContent>
          <AboutCard
            icon={<FcAssistant />}
            title="Canli Destek"
            text="Uluslararasi ve her zaman yeni restoranlar peşinde."
          />
          <AboutCard
            icon={<FcDonate />}
            title="Kolay Ödeme"
            text="Restoran rezervasyonlarini kolaylaştiriyoruz - web ya da uygulama üzerinden çevrimiçi ödeme yapabilirsiniz"
          />
          <AboutCard
            icon={<FcInTransit />}
            title="Hizli Ulaşim"
            text="Siparişler Hizli ve Güvenilir şekilde teslim edilmektedir"
          />
          <AboutCard
            icon={<FcCamcorder />}
            title="Canli İzle"
            text="Siparişiniz hazir olup olmadiğini uygulama üzerinden izleyebilirsiniz"
          />
        </AboutContent>
      </AboutContainer>
    </React.Fragment>
  );
};

export default About;
