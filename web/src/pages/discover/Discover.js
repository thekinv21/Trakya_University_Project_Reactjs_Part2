import Container from "../../components/container/Container";
import FilterCard from "./components/RestaurantFilter/FilterCard";
import { Box } from "@chakra-ui/react";
import { useGetFilteredRest } from "../../api/restaurant";
import RestSearch from "./components/RestaurantSearch/RestSearch";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Discover = () => {
  const cityRef = useRef();
  const restaurantNameRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedSortOption, setSelectedSortOption] = useState(
    searchParams.get("sortField" || "")
  );
  const page = searchParams.get("page");
  
  //*===================PAGİNATİON===================
  const [currentPage, setCurrentPage] = useState(page || 0);

  const sortField = searchParams.get("sortField") || "";
  const restaurantName = searchParams.get("restaurantName") || "";
  const city = searchParams.get("city") || "";
  const size = searchParams.get("size") || "4";

  console.log(sortField);

  const [initialValues, setInitialValues] = useState({
    restaurantName: restaurantName,
    city: city,
    sortField: sortField,
  });

  const { data: rest, isLoading } = useGetFilteredRest(
    city,
    restaurantName,
    page - 1,
    size,
    sortField
  );

  const handleClick = async () => {
    console.log(
      cityRef.current.input.value,
      restaurantNameRef.current.input.value,
      selectedSortOption
    );

    window.location.href = `/discover?city=${
      cityRef.current.input.value
    }&restaurantName=${restaurantNameRef.current.input.value}&page=${
      page - 1
    }&size=${size}&sortField=${selectedSortOption}`;
  };

  const setPage = (e) => {
    console.log("eeee", e);
    setSearchParams({
      ...searchParams,
      page: e,
      city: initialValues.city,
      restaurantName: initialValues.restaurantName,
      sortField: initialValues.sortField,
    });
    setCurrentPage(e);
  };

  //*===================All RESTAURANTS===================

  if (isLoading) return rest;

  return (
    <Container>
      <Box
        className="container"
        display={["block", "block", "block", "flex"]}
        gap={5}
        overflow="hidden"
        pt={50}
      >
        {/*===============DISCOVER SEARCH AND MAP=============== */}

        <Box
          className="container"
          display="flex"
          flexDirection="column"
          mb={50}
          maxW={880}
        >
          <RestSearch
            cityRef={cityRef}
            restaurantNameRef={restaurantNameRef}
            selectedSortOption={selectedSortOption}
            setSelectedSortOption={setSelectedSortOption}
            initialValues={initialValues}
            handleClick={handleClick}
            page={page}
            rest={rest}
            currentPage={currentPage}
            setCurrentPage={setPage}
            setInitialValues={setInitialValues}
          />
        </Box>

        {/*=====================DISCOVER FİLTER================== */}

        <Box>
          <FilterCard />
        </Box>
      </Box>
    </Container>
  );
};

export default Discover;
