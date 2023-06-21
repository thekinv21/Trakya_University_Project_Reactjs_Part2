import React from "react";
import FooterContainer from "./components/footer-container";
import FooterContent from "./components/footer-content";
import { Link, Stack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import AppStore from "../../assets/svg/AppStore.svg";
import GooglePlay from "../../assets/svg/GooglePlay.svg";

const Footer = () => {
  return (
    <React.Fragment>
      {/*-------------------Footer main Container--------------------- */}

      <FooterContainer>
        {/*------------------------Yasal link------------------------- */}

        <FooterContent title="YASAL">
          <Link href="#">Künye</Link>
          <Link href="#">Gizlilik Politikasi</Link>
          <Link href="#">Şartlar ve Koşullar</Link>
        </FooterContent>

        {/*----------------------Hakkımızda link---------------------- */}

        <FooterContent title=" HAKKIMIZDA">
          <Link href="#">Bonus Puanlari</Link>
          <Link href="#">Bize Ulaşin</Link>
          <Link href="#">Restoraninizi Listeleyin</Link>
          <Link href="#">Kariyer</Link>
          <Link href="#">Site Haritasi</Link>
        </FooterContent>

        {/*----------------------------Sosyal link--------------------- */}

        <FooterContent title="SOSYAL">
          <Stack direction="row" spacing={6} pt={6}>
            <IconButton colorScheme="facebook" icon={<FaFacebook />} />
            <IconButton colorScheme="twitter" icon={<FaTwitter />} />
            <IconButton colorScheme="red" icon={<FaYoutube />} />
          </Stack>
        </FooterContent>

        {/*-----------------------Uygulamalar link--------------------- */}

        <FooterContent title="UYGULAMALAR">
          <Stack direction="row" alignItems="center" spacing={10}>
            <Link href="#">
              <Image w={100} src={GooglePlay} />
            </Link>
            <Link href="#">
              <Image w={100} src={AppStore} />
            </Link>
          </Stack>
        </FooterContent>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
