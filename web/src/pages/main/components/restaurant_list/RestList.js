import React from "react";
import Title from "../title/title";
import { Box } from "@chakra-ui/react";
import RestItem from "./RestItem";

const Restaurants = () => {
  return (
    <React.Fragment>
      {/*====================RESTAURANTSLİST MAİN CONTAİNER=============*/}

      <Box className="container-fluid" textAlign="center" w="100%">
        {/*====================RESTAURANTSLİST TİTLE=================== */}

        <Title title="Populer Restoranlar" />

        {/*====================RESTAURANTSLİST CONTENT=================*/}

        <Box className="container pt-5" h="50vh">
          {/*====================RESTAURANTSLİST SLİDER===============*/}

          <RestItem />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Restaurants;
