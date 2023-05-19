import { Card, Heading, Box, Button } from "@chakra-ui/react";
import { useReserveFilter } from "./useReserveFilter";
import SelectSortBy from "../../../../components/shared/selects/SelectSort";
import ReservationItems from "../ReservationItems/ReservationItems";

const ReservationFilter = ({ reserveData }) => {
  const { filterBy, setFilter, handleFilter, filteredData } = useReserveFilter({
    reserveData,
  });

  return (
    <>
      <Card
        p={5}
        overflow="hidden"
        bg="whiteAlpha.200"
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
        mb={5}
      >
        {/*=====================FİLTER SUBTITLE==================*/}

        <Heading fontWeight="semibold" fontSize="small" mb={5} color="orange">
          Rezervaysonlari Filtrele :
        </Heading>

        <Box
          as="form"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={["column", "column", "column", "row"]}
          gap={5}
        >
          {/*======================DURUMA GÖRE==================*/}

          <Box w="100%" flexShrink={1}>
            <SelectSortBy
              name="filterReserve"
              options={filterBy}
              getValue={(selectedValue) => {
                setFilter(selectedValue);
              }}
            />
          </Box>
          {/*=====================FİLTER BUTONU===================*/}

          <Button
            w={{ base: "100%", md: "50%" }}
            bg="rgb(248, 179, 51)"
            color="#fff"
            fontWeight="regular"
            fontSize="small"
            _hover={{ bg: "orange" }}
            size="sm"
            onClick={handleFilter}
          >
            Filtrele
          </Button>
        </Box>
      </Card>

      {/*=====================FİLTERED RESERVATİONS===================*/}
      <ReservationItems data={filteredData} />
    </>
  );
};

export default ReservationFilter;
