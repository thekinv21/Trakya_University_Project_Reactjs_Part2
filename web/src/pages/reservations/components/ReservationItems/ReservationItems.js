import { Box } from "@chakra-ui/react";
import ReservationCard from "../ReservationCard/ReservationCard";
import ReserveNotFound from "./../ReservationNotFound/ReserveNotFound";

const ReservationItems = ({ data }) => {
  return (
    <>
      {data.length ? (
        data.map((res) => (
          <Box key={res.id} w="100%">
            <ReservationCard reserve={res} />
          </Box>
        ))
      ) : (
        <ReserveNotFound />
      )}
    </>
  );
};

export default ReservationItems;
