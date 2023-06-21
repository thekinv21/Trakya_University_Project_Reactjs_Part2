import React from "react";
import QuetionContent from "./components/quetion-content";
import QuestionContainer from "./components/quetion-container";
import Title from "../title/title";
import QuestionCard from "./components/quetion-card";
import { Heading, Text } from "@chakra-ui/react";

const Quetions = () => {
  return (
    <React.Fragment>
      <QuestionContainer>
        <Title title="Sıkça Sorulan Sorular" />

        <QuetionContent>
          <QuestionCard
            quetion={<Heading fontSize={14}>REZZTORAN NEDİR?</Heading>}
            reply={
              <Text>
                Rezztoran, akşam yemeklerini dünyanın en iyi restoranlarından
                bazılarıyla buluşturan bir restoran rezervasyon platformudur.
                Gurmelerin restoranları keşfetmesi, masa ayırtması ve yemek
                yemesi için bir yer.
              </Text>
            }
          />
          <QuestionCard
            quetion={<Heading fontSize={14}>MASA AYIRMAK ÜCRETSİZ Mİ?</Heading>}
            reply={
              <Text>
                Rezztoran kullanmak tamamen ücretsizdir! Bu, akşam yemeklerinin
                ücretsiz olarak masa ayırtabileceği anlamına gelir. Bazen bir
                restoranın iptal politikası nedeniyle, bir lokantanın
                rezervasyon sırasında kredi kartı bilgilerini vermesi
                gerekebilir. Politikaya bağlı olarak, geç iptal veya
                rezervasyonun kullanılmaması durumunda karttan ücret alınabilir.
              </Text>
            }
          />
          <QuestionCard
            quetion={
              <Heading fontSize={14}>
                "REZERVASYONLARIMI NASIL DÜZENLEYEBİLİR VEYA İPTAL EDEBİLİRİM?"
              </Heading>
            }
            reply={
              <Text>
                Tüm müşteriler, rezervasyon yaptıktan sonra aldıkları Rezztoran
                onay e-postası aracılığıyla rezervasyonlarını kolayca
                düzenleyebilir veya iptal edebilirler. E-postada, müşteriler
                rezervasyonlarını Değiştir veya İptal et seçebilirler.
                Seçildiğinde, müşteriler süreci tamamlamak için Rezztoran web
                sitesine yönlendirilecektir. Yemek yiyenler daha sonra
                güncellemelerini onaylayan bir e-posta alacak. Quandoo hesabı
                olan müşteriler ayrıca Kullanıcı Profilleri aracılığıyla
                rezervasyonlarını düzenleyebilir veya iptal edebilirler.
                Rezttoran web sitesinde veya Rezztoran uygulamalarında
                hesaplarına giriş yaptıktan sonra, yemek yiyenler Kullanıcı
                Profilinin Rezervasyonlar sekmesine gidebilirler. Daha sonra
                istedikleri rezervasyonu bulabilir ve Rezervasyonu düzenle veya
                İptal et seçebilirler. Yemek yiyenler daha sonra
                güncellemelerini onaylayan bir e-posta alacak.
              </Text>
            }
          />
          <QuestionCard
            quetion={
              <Heading fontSize={14}>REZZTORAN BONUS PUANLARI NEDİR?</Heading>
            }
            reply={
              <Text>
                Rezztoran Bonus Puanları, Rezztoran hesabı olan müşterilere para
                iadesi veren bir restoran ödül programıdır. Yemek yiyenler bir
                hesap oluşturarak, rezervasyon yaparak, yorum yazarak ve
                arkadaşlarını önererek Bonus Puanları kazanabilirler. 1000'den
                fazla puan kazandıktan sonra, yemek yiyenler puanlarını banka
                hesaplarına aktarılan bir geri ödeme ödülü için kullanabilirler.
                Daha fazla bilgi için Rezztoran Bonus Puanları sayfamıza göz
                atın.
              </Text>
            }
          />

          <QuestionCard
            quetion={
              <Heading fontSize={14}>
                REZZTORAN RESTORANLAR İÇİN HİZMETLERİ VAR MI??
              </Heading>
            }
            reply={
              <Text>
                Evet, Rezztoran'nın uluslararası pazarlarımızda restoranlar için
                mevcut bir dizi ürünü vardır. Restoran işletmecilerini, onları
                daha fazla sigorta kapsamına alma ve sorunsuz hizmet yürütme
                konusunda destekleyen endüstri lideri rezervasyon ve yönetim
                araçlarıyla donatma konusunda tutkuluyuz.
              </Text>
            }
          />
        </QuetionContent>
      </QuestionContainer>
    </React.Fragment>
  );
};

export default Quetions;
