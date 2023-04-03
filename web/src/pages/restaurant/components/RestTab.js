import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RestAbout from "./RestAbout";
import RestaurantImage from "./RestImage";
import RestReviews from "./RestReviews";

const RestTab = ({ restaurantInfo }) => {
  return (
    <Tabs
      w={["100%", "100%", "100%", "100%"]}
      isFitted
      variant="enclosed"
      colorScheme="orange"
    >
      {/*=====================REST HEADER================== */}
      <TabList
        alignItems="center"
        justifyContent={["center", "center", "center", "space-around"]}
      >
        <Tab>Hakkinda</Tab>
        <Tab>Menulari</Tab>
        <Tab>Resimleri</Tab>
        <Tab>Yorumlar</Tab>
      </TabList>

      {/*=====================REST TABS================== */}

      <TabPanels>
        {/*=====================REST ABOUT================== */}
        <TabPanel>
          <RestAbout restaurantInfo={restaurantInfo} />
        </TabPanel>

        {/*=====================REST MeNU================== */}
        <TabPanel>
          <p>two!</p>
        </TabPanel>

        {/*=====================REST IMAGES================== */}
        <TabPanel>
          <RestaurantImage
            restaurantImages={restaurantInfo.restaurantImageList}
          />
        </TabPanel>

        {/*=====================REST REVİEWS================== */}
        <TabPanel>
          <RestReviews />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RestTab;
