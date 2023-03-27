import React from "react";
import Container from "./components/Container";
import SeacrhCard from "./components/SeacrhCard";
import FilterCard from "./components/FilterCard";
import Map from "../../components/map/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@chakra-ui/react";

const Discover = () => {
  return (
    <React.Fragment>
      <Container>
        <Box
          className="container"
          display={["block", "block", "block", "flex"]}
          gap={5}
        >
          {/*===============DISCOVER SEARCH AND MAP=============== */}

          <Box display="flex" flexDirection="column" gap={5}>
            <SeacrhCard />

            <Map
              width="100%"
              height={400}
              restaurantInfo={{
                latitude: "41.674965",
                longitude: "	26.583481",
              }}
            />
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
