import React from "react";
import Container from "../../components/container/Container";
import { useSelector } from "react-redux";
import ReserveCard from "../../components/cards/reservation/ReserveCard";
import UserCard from "../../components/cards/user/UserCard";
import { Box } from "@chakra-ui/react";
import ReserveNotFound from "../../components/cards/reservation/ReserveNotFound";

const Reservations = () => {
  
  //*==================REZERVE EDİLEN RESTORANLARI LİSTESİ===================

  const reservedRestaurants = useSelector(
    (state) => state.Reserved.reserveds
  );

  return (
    <React.Fragment>
      {/*==================RESERVATİON PAGE CONTAİNER============== */}

      <Container>
        <Box className="container-sm p-5" display="flex" gap={5}>
          {/*==================RESERVATİON PAGE USERCARD============*/}
          <UserCard />

          {/*==================RESERVATİONS CONTAİNER============== */}
          <Box
            className="container-sm"
            display="flex"
            flexDirection="column"
            gap={5}
          >
            {/*==================RESERVATİON MEVCUT İSE=============*/}

            {reservedRestaurants.length > 0 ? (
              reservedRestaurants.map((res, index) => (
                <Box key={index} w="100%">
                  <ReserveCard
                    restaurantAddress={res.restaurantAddress}
                    restaurantImage={res.restaurantImage}
                    restaurantName={res.restaurantName}
                    reserveId={res.reserveId}
                    reservedDate={res.reserveDate}
                    reservedTime={res.reserveTime}
                    reservedPeoples={res.reservePeoples}
                    reservedPeopleComment={res.reservedPeopleComment}
                  />
                </Box>
              ))
            ) : (
              /*==================RESERVATİON MEVCUT DEĞİLİSE============== */
              <ReserveNotFound />
            )}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Reservations;
