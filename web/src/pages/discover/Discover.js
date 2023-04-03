import React from "react";
import Container from "../../components/container/Container";
import SeacrhCard from "./components/SeacrhCard";
import FilterCard from "./components/FilterCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@chakra-ui/react";
import RestaurantCard from "../../components/cards/restaurant/RestaurantCard";

const Discover = () => {
  return (
    <React.Fragment>
      <Container>
        <Box
          className="container"
          display={["block", "block", "block", "flex"]}
          gap={5}
          overflow="hidden"
          pt={50}
        >
          {/*===============DISCOVER SEARCH AND MAP=============== */}

          <Box display="flex" flexDirection="column" mb={50}>
            <SeacrhCard />

            <RestaurantCard />
          </Box>

          {/*=====================DISCOVER FİLTER================== */}

          <Box className="container">
            <FilterCard />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Discover;
