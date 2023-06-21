import { Box } from "@chakra-ui/react";
import ReservationCard from "../ReservationCard/ReservationCard";
import ReserveNotFound from "./../ReservationNotFound/ReserveNotFound";

const ReservationItems = ({ data, refetch }) => {
  return (
    <>
      {data.length ? (
        data.map((res) => (
          <Box key={res.id} w="100%">
            <ReservationCard reserve={res} refetch={refetch} />
          </Box>
        ))
      ) : (
        <ReserveNotFound />
      )}
    </>
  );
};

export default ReservationItems;
