import Container from "../../components/container/Container";
import UserCard from "../../components/cards/user/UserCard";
import { Box } from "@chakra-ui/react";
import { useResevation } from "./useReservation";
import ReservationFilter from "./components/ReservationFilter/ReservationFilter";
import { ToastContainer } from "react-toastify";

const Reservations = () => {
  const { data, isLoading, refetch } = useResevation();
  if (isLoading) return data;

  return (
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
          {/*==================RESERVATİON FİLTER CARD=============*/}

          <ReservationFilter reserveData={data} refetch={refetch} />
          <ToastContainer />
        </Box>
      </Box>
    </Container>
  );
};

export default Reservations;
